import mongoose, { Schema, Document, model, mongo } from 'mongoose';

export interface IPet extends Document {
  id: string;
  name: string;
  location: string;
  breed: string;
  adopted: string;
  photosUrl: string[];
  description: string;
  size: 'pequeno' | 'grande';
  adoptionDate: Date;
  adoptionPlace: string;
  adopteeId: string;
  employee: string;
  status: number;
  followUpDate: Date;
}

const PetSchema: Schema = new Schema(
  {
    name: { type: String },
    location: { type: String },
    breed: { type: String },
    adopted: { type: String, default: 'false' },
    photosUrl: [{ type: String }],
    description: { type: String },
    size: { type: String, default: 'pequeno' },
    adoptionDate: { type: Date, default: new Date() },
    adoptionPlace: { type: String },
    adopteeId: { type: String, ref: 'User' },
    employee: { type: String },
    status: { type: Number, default: 1 },
    followUpDate: { type: Date },
  },
  { timestamps: true }
);

export const Pet = model<IPet>('Pet', PetSchema);
