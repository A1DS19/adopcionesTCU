import { IUser } from './../models/user';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Pet } from '../models/pet';
import nodemailer from 'nodemailer';
import { s3delete } from '../services/s3-delete';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from '../models/user';
import mongoose from 'mongoose';

interface MulterRequest extends Request {
  file: any;
  files: any;
}

export const createPet = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const {
    name,
    location,
    breed,
    adopted,
    description,
    size,
    adoptionDate,
    adoptionPlace,
    adopteeId,
    employee,
  } = req.body;

  try {
    const adoptee = await User.findOne({ cedula: adopteeId });
    if (!adoptee && JSON.parse(adopted)) {
      return res.status(404).json({ msg: 'Esa cedula no corresponde a ningun usuario' });
    }

    const pet = new Pet({
      name,
      location,
      breed,
      adopted,
      description,
      size,
      adoptionDate,
      adoptionPlace,
      adopteeId: adopted === 'true' ? adoptee?._id : '',
      employee,
    });

    if (JSON.parse(pet.adopted)) {
      const followUp = new Date(pet.adoptionDate);
      followUp.setMonth(followUp.getMonth() + 1);
      pet.followUpDate = followUp;
    }

    const newPet = await pet.save();

    res.status(201).json({
      msg: 'Mascota creada',
      id: newPet._id,
      name: newPet.name,
      location: newPet.location,
      breed: newPet.breed,
      adopted: newPet.adopted,
      description: newPet.description,
      photosUrl: newPet.photosUrl,
      size: newPet.size,
      adoptionDate: newPet.adoptionDate,
      adoptionPlace: newPet.adoptionPlace,
      adopteeId: adopteeId,
      employee: newPet.employee,
      followUpDate: newPet.followUpDate,
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const updatePet = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { petId } = req.params;
  const {
    name,
    location,
    breed,
    adopted,
    description,
    size,
    adoptionDate,
    adoptionPlace,
    adopteeId,
    employee,
  } = req.body;

  try {
    const pet = await Pet.findById(petId);

    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no existe' });
    }

    let adoptee: IUser | null = null;
    if (adopteeId) {
      adoptee = await User.findOne({ cedula: adopteeId });
      if (!adoptee) {
        return res
          .status(404)
          .json({ msg: 'Esa cedula no corresponde a ningun usuario' });
      }
    }

    if (JSON.parse(pet.adopted)) {
      const followUp = new Date(adoptionDate);
      followUp.setMonth(followUp.getMonth() + 1);
      pet.followUpDate = followUp;
    }

    pet.name = name;
    pet.location = location;
    pet.breed = breed;
    pet.adopted = adopted;
    pet.description = description;
    pet.size = size;
    pet.adoptionDate = adoptionDate;
    pet.adoptionPlace = adoptionPlace;
    pet.adopteeId = adoptee ? adoptee._id : '';
    pet.employee = employee;

    const updatedPet = await pet.save();

    res.status(201).json({
      msg: 'Mascota actualizada',
      id: updatedPet._id,
      name: updatedPet.name,
      location: updatedPet.location,
      breed: updatedPet.breed,
      adopted: updatedPet.adopted,
      description: updatedPet.description,
      photosUrl: updatedPet.photosUrl,
      size: updatedPet.size,
      adoptionDate: updatedPet.adoptionDate,
      adoptionPlace: updatedPet.adoptionPlace,
      adopteeId: updatedPet.adopteeId,
      employee: updatedPet.employee,
      followUpDate: updatedPet.followUpDate,
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPet = async (req: Request, res: Response, next: NextFunction) => {
  const { petId } = req.params;

  try {
    const pet = await Pet.findById(petId);

    if (!pet) {
      res.status(404).json({ msg: 'Mascota no encontrada' });
    }

    let user;
    if (pet?.adopteeId !== '') {
      user = await User.findById(mongoose.Types.ObjectId(pet?.adopteeId));
    }

    res.status(200).json({
      msg: 'Mascota encontrada',
      id: pet?._id,
      name: pet?.name,
      adopted: pet?.adopted,
      photosUrl: pet?.photosUrl,
      location: pet?.location,
      breed: pet?.breed,
      description: pet?.description,
      size: pet?.size,
      adoptionDate: pet?.adoptionDate,
      adoptionPlace: pet?.adoptionPlace,
      adopteeId: user ? user.cedula : pet?.adopteeId,
      employee: pet?.employee,
      followUpDate: pet?.followUpDate,
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const deletePet = async (req: Request, res: Response, next: NextFunction) => {
  const { petId } = req.params;

  try {
    const pet = await Pet.findById(petId);

    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no existe' });
    }

    if (pet.photosUrl) {
      pet.photosUrl.map(async (img: string) => {
        let Key = img.split('https://s3.amazonaws.com/adoptme.cr/')[1];
        await s3delete({ Bucket: process.env.AWS_S3_BUCKET!, Key: Key });
      });
    }

    pet.status = 0;
    pet.photosUrl = [];
    await pet.save();

    res.status(200).json({
      msg: 'Mascota eliminada',
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPets = async (req: Request, res: Response, next: NextFunction) => {
  const page = req.query.page || '0';
  const limit = 10;

  try {
    const totalPets = await Pet.countDocuments();
    const pets = await Pet.find()
      .where('status')
      .equals(1)
      .limit(limit * 1)
      .skip(+page! * limit)
      .sort({ createdAt: -1 });

    if (!pets) {
      return res.status(404).json({ msg: 'No hay usuarios' });
    }

    res.status(200).json({ pets, totalPages: Math.ceil(totalPets / limit) });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const uploadPetPictures = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { petId } = req.params;
  const imagesKeys = Object.keys(req.files);
  let images: string[] = [];

  res.send({ msg: 'Images agregadas', images });

  if (!images) {
    return res.status(404).json({ msg: 'Las imagenes no pudieron ser guardadas' });
  }

  imagesKeys.forEach((key) => {
    images.push((req as MulterRequest).files[key]);
  });

  try {
    const pet = await Pet.findById(petId);

    if (!pet) {
      return res.status(404).json({ msg: 'La mascota no existe' });
    }

    images.forEach((img: any) => {
      pet.photosUrl.push(img.location);
    });

    const updatedPet = await pet.save();

    res.status(200).json({
      msg: 'Fotos de mascota actualizada',
      id: updatedPet._id,
      name: updatedPet?.name,
      adopted: updatedPet?.adopted,
      photosUrl: updatedPet?.photosUrl,
      location: updatedPet?.location,
      breed: updatedPet?.breed,
      description: updatedPet?.description,
      size: updatedPet?.size,
      adoptionDate: updatedPet?.adoptionDate,
      adoptionPlace: updatedPet?.adoptionPlace,
      adopteeId: updatedPet?.adopteeId,
      employee: updatedPet?.employee,
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { userName, email, message, petId } = req.body;

  try {
    const pet = await Pet.findById(petId);
    const output = `
    <h3>Nueva consulta acerca de ${pet?.name}</h3>
    <p>De: ${email}, ${userName}</p>
    <p>Mensaje:</p>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.AWS_SMTP_HOST,
      port: process.env.AWS_SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.AWS_SMTP_USERNAME, // generated ethereal user
        pass: process.env.AWS_SMTP_PASSWORD, // generated ethereal passwordå
      },
    } as SMTPTransport.Options);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_RECIPIENT, // sender address
      to: process.env.EMAIL_RECIPIENT, // list of receivers
      subject: `Nueva consulta acerca de ${pet?.name}`, // Subject line
      html: output, // html body
    });

    console.log(`email enviado ${info.messageId}`);

    res.status(201).json({ msg: 'Consulta enviada' });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPetByName = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }
  const { name } = req.body;

  try {
    let pets = null;

    pets = await Pet.find({ name: { $regex: name }, status: 1 });

    pets.forEach(async (pet) => {
      if (pet.adopted === 'true') {
        pets = await Pet.find({ name: { $regex: name }, status: 1 }).populate(
          'adopteeId'
        );
      }
    });

    if (!pets) {
      return res.status(404).json({ msg: 'Mascotas no encontradas' });
    }

    res.status(200).json({
      msg: 'Mascota encontrada',
      pets,
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const getAdoptedPets = async (req: Request, res: Response, next: NextFunction) => {
  const page = req.query.page || '0';
  const limit = 10;

  try {
    const totalPets = await Pet.countDocuments();
    const pets = await Pet.find()
      .where('status')
      .equals(1)
      .where('adopted')
      .equals('true')
      .populate('adopteeId')
      .limit(limit * 1)
      .skip(+page! * limit)
      .sort({ followUpDate: -1 });

    if (!pets) {
      return res.status(404).json({ msg: 'No hay mascotas' });
    }

    res.status(200).json({ pets, totalPages: Math.ceil(totalPets / limit) });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateFollowUpDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { petId } = req.params;

  try {
    const pet = await Pet.findById(petId).populate('adopteeId');

    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no existe' });
    }

    if (JSON.parse(pet.adopted)) {
      const followUp = new Date();
      followUp.setMonth(followUp.getMonth() + 1);
      pet.followUpDate = followUp;
    }

    await pet.save();

    res.status(201).json({
      msg: 'Fecha actualizada',
      id: pet?._id,
      _id: pet?._id,
      name: pet?.name,
      location: pet?.location,
      breed: pet?.breed,
      adopted: pet?.adopted,
      description: pet?.description,
      photosUrl: pet?.photosUrl,
      size: pet?.size,
      adoptionDate: pet?.adoptionDate,
      adoptionPlace: pet?.adoptionPlace,
      adopteeId: pet?.adopteeId,
      employee: pet?.employee,
      followUpDate: pet?.followUpDate,
    });
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};
