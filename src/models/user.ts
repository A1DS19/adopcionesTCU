import mongoose, { Schema, Document, model } from 'mongoose';
const bcrypt = require('bcryptjs');

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

interface IUserDocument extends IUser {
  isValidPassword: (password: string) => Promise<boolean>;
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

//Antes de guardar un documento va a hashear la contrasena, NO se puede hacer user.save() sin rescribir la contraseña
// UserSchema.pre('save', async function (this: IUser, next) {
//   const user = this;
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(user.password, salt);

//   this.password = hashedPassword;
//   next();
// });

//Compara contrasenas y devuelve valor booleano
UserSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, (this as any).password);

  return compare;
};

export const User = model<IUser>('User', UserSchema);
