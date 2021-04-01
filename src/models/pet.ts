import mongoose, { Schema, Document, model } from 'mongoose';

export interface IPet extends Document {
  id: string;
  name: string;
  location: string;
  breed: string;
  adopted: string;
  photosUrl: string[];
  description: string;
}

const PetSchema: Schema = new Schema(
  {
    name: { type: String },
    location: { type: String },
    breed: { type: String },
    adopted: { type: String, default: 'false' },
    photosUrl: [{ type: String }],
    description: { type: String },
  },
  { timestamps: true }
);

export const Pet = model<IPet>('Pet', PetSchema);
