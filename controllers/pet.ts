import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Pet } from '../models/pet';
import nodemailer from 'nodemailer';
import { s3delete } from '../services/s3-delete';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface MulterRequest extends Request {
  file: any;
  files: any;
}

export const createPet = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { name, location, breed, adopted, description } = req.body;

  try {
    const pet = new Pet({
      name,
      location,
      breed,
      adopted,
      description,
    });

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
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updatePet = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { petId } = req.params;
  const { name, location, breed, adopted, description } = req.body;

  try {
    const pet = await Pet.findById(petId);

    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no existe' });
    }

    pet.name = name;
    pet.location = location;
    pet.breed = breed;
    pet.adopted = adopted;
    pet.description = description;

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
    });
  } catch (err) {
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

    res.status(200).json({
      msg: 'Mascota encontrada',
      id: pet?._id,
      name: pet?.name,
      adopted: pet?.adopted,
      photosUrl: pet?.photosUrl,
      location: pet?.location,
      breed: pet?.breed,
      description: pet?.description,
    });
  } catch (err) {
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

    await Pet.findByIdAndDelete(pet._id);

    res.status(200).json({
      msg: 'Mascota eliminada',
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPets = async (req: Request, res: Response, next: NextFunction) => {
  const page = req.query.page || '0';
  const limit = 10;

  try {
    const totalPets = await Pet.countDocuments();
    const pets = await Pet.find()
      .limit(limit * 1)
      .skip(+page! * limit);

    if (!pets) {
      return res.status(404).json({ msg: 'No hay usuarios' });
    }

    res.status(200).json({ pets, totalPages: Math.ceil(totalPets / limit) });
  } catch (err) {
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
    });
  } catch (err) {
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
      from: 'jp06171@gmail.com', // sender address
      to: 'jp06171@gmail.com', // list of receivers
      subject: `Nueva consulta acerca de ${pet?.name}`, // Subject line
      html: output, // html body
    });

    console.log(`email enviado ${info.messageId}`);

    res.status(201).json({ msg: 'Consulta enviada' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
