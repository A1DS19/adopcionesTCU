import { types } from '../types';

export interface PetsData {
  id?: number;
  _id?: string;
  name: string;
  location: string;
  breed: string;
  adopted: string;
  photosUrl?: string[];
  description: string;
}

export interface UpdatePageNumber {
  type: types.UPDATE_PAGE_NUMBER;
  payload: number;
}

export interface PetsComments {
  id: String;
  date: Date;
  comment: String;
  commentReplies: [];
}

export interface FetchPets {
  type: types.FETCH_PETS_DATA;
  payload: { pets: PetsData[]; totalPages: number };
}

export interface FetchSelectedPet {
  type: types.FETCH_SELECTED_PET;
  payload: PetsData | undefined;
}

export interface ClearSelectedPet {
  type: types.CLEAR_SELECTED_PET;
  payload: undefined;
}

export interface CreatePet {
  type: types.CREATE_PET;
  payload: PetsData;
}

export interface UpdatePet {
  type: types.UPDATE_PET;
  payload: PetsData;
}

export interface DeletePet {
  type: types.DELETE_PET;
  payload: string | null;
}
