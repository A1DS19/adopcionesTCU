import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/user';

interface MulterRequest extends Request {
  file: any;
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { email, displayName, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ msg: 'El email ya existe' });
    }

    const existingUser2 = await User.findOne({ displayName });

    if (existingUser2) {
      return res.status(401).json({ msg: 'El nombre de usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      displayName,
      password: hashedPassword,
    });

    const newUser = await user.save();

    const token = jwt.sign(
      {
        userId: newUser.id,
        isAdmin: newUser.isAdmin,
      },
      process.env.JWT_SECRET_KEY as string
    );

    res.status(201).json({
      msg: 'Usuario creado',
      token,
      id: newUser?.id,
      name: newUser?.name,
      email: newUser?.email,
      lastName: newUser?.lastName,
      isAdmin: newUser?.isAdmin,
      displayName: newUser?.displayName,
      createdAt: newUser?.createdAt,
      photoURL: newUser?.photoURL,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ msg: 'Datos invalidos' });
    }

    const isEqual = await bcrypt.compare(password, existingUser.password);

    if (!isEqual) {
      return res.status(401).json({ msg: 'Datos invalidos' });
    }

    const token = jwt.sign(
      {
        userId: existingUser.id,
        isAdmin: existingUser.isAdmin,
      },
      process.env.JWT_SECRET_KEY as string
    );

    res.status(201).json({
      msg: 'Usuario loggeado',
      token,
      id: existingUser?.id,
      name: existingUser?.name,
      email: existingUser?.email,
      lastName: existingUser?.lastName,
      isAdmin: existingUser?.isAdmin,
      displayName: existingUser?.displayName,
      createdAt: existingUser?.createdAt,
      photoURL: existingUser?.photoURL,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ msg: 'Usuario no existe' });
    }

    res.status(200).json({
      msg: 'Usuario encontrado',
      id: user?.id,
      name: user?.name,
      email: user?.email,
      lastName: user?.lastName,
      isAdmin: user?.isAdmin,
      displayName: user?.displayName,
      createdAt: user?.createdAt,
      photoURL: user?.photoURL,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { userId } = req.params;
  const { name, lastName, displayName } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    user.displayName = displayName;
    user.name = name;
    user.lastName = lastName;

    const updatedUser = await user.save();

    res.status(201).json({
      msg: 'Usuario actualizado',
      id: updatedUser?.id,
      name: updatedUser?.name,
      email: updatedUser?.email,
      lastName: updatedUser?.lastName,
      isAdmin: updatedUser?.isAdmin,
      displayName: updatedUser?.displayName,
      createdAt: updatedUser?.createdAt,
      photoURL: updatedUser?.photoURL,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    await User.findByIdAndDelete(user.id);

    res.status(200).json({
      msg: 'Usuario eliminado',
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  const { oldPassword, newPassword } = req.body;

  console.log(oldPassword, newPassword);

  try {
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    const isEqual = await bcrypt.compare(oldPassword, existingUser.password);

    if (!isEqual) {
      return res.status(402).json({ msg: 'Datos invalidos' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    existingUser.password = hashedPassword;

    await existingUser.save();

    res.status(201).json({
      msg: 'Contrasena actualizada',
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const uploadUserPFP = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  const image = (req as MulterRequest).file.location;

  if (!image) {
    return res.status(404).json({ msg: 'La imagen no pudo ser guardada' });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'El usuario no existe' });
    }

    user.photoURL = image;

    const updatedUser = await user.save();

    res.status(200).json({
      msg: 'Foto de perfil actualizada',
      id: updatedUser?.id,
      name: updatedUser?.name,
      email: updatedUser?.email,
      lastName: updatedUser?.lastName,
      isAdmin: updatedUser?.isAdmin,
      displayName: updatedUser?.displayName,
      createdAt: updatedUser?.createdAt,
      photoURL: updatedUser?.photoURL,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
