import mongoose, { Schema, Document, model } from 'mongoose';

type isAdmin = 'true' | 'false';

export interface IUser extends Document {
  id: number;
  email: string;
  password: string;
  displayName: string;
  name: string;
  lastName: string;
  isAdmin: isAdmin;
  createdAt: Date;
  photoURL: string;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    displayName: {
      type: String,
      required: true,
    },
    name: { type: String },
    lastName: { type: String },
    isAdmin: { type: String, default: 'false' },
    photoURL: { type: String },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', UserSchema);
