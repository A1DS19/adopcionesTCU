import { types } from '../types';

export interface PetsData {
  id: number;
  name: string;
  location: string;
  breed: string;
  adopted: boolean;
  photosUrl: string[];
  description: string;
}

export interface FetchPets {
  type: types.FETCH_PETS_DATA;
  payload: PetsData[];
}

export interface FetchSelectedPet {
  type: types.FETCH_SELECTED_PET;
  payload: PetsData | undefined;
}
