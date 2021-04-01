import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import { s3delete } from '../services/s3-delete';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ msg: 'No hay usuarios' });
    }

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { email, password, name, lastName, isAdmin, displayName } = req.body;

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
      name,
      lastName,
      isAdmin,
    });

    const newUser = await user.save();

    res.status(201).json({
      msg: 'Usuario creado',
      _id: newUser._id,
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

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ msg: 'Usuario no existe' });
    }

    res.status(200).json({
      msg: 'Usuario encontrado',
      _id: user?._id,
      id: user?.id,
      name: user?.name,
      email: user?.email,
      lastName: user?.lastName,
      isAdmin: user?.isAdmin,
      displayName: user?.displayName,
      password: user?.password,
      createdAt: user?.createdAt,
      photoURL: user?.photoURL,
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

    if (user.photoURL) {
      const Key = user.photoURL.split('https://s3.amazonaws.com/adoptme.cr/')[1];
      await s3delete({ Bucket: process.env.AWS_S3_BUCKET!, Key });
    }

    await User.findByIdAndDelete(user.id);

    res.status(200).json({
      msg: 'Usuario eliminado',
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const { userId } = req.params;
  const { name, lastName, displayName, email, isAdmin } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    user.displayName = displayName;
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.isAdmin = isAdmin;

    const updatedUser = await user.save();

    console.log(updatedUser?.displayName);

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
