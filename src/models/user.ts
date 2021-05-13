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
  status: number;
  cedula: string;
  phone: string;
  direction: string;
  wishlist: string[];
  donation: string;
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
    },
    name: { type: String },
    lastName: { type: String },
    isAdmin: { type: String, default: 'false' },
    photoURL: { type: String },
    direction: { type: String },
    status: { type: Number, default: 1 },
    cedula: { type: String },
    phone: { type: String },
    wishlist: [{ type: mongoose.Types.ObjectId, ref: 'Pet', default: [] }],
    donation: { type: String, default: 'false' },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', UserSchema);
