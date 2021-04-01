import { PetsData } from '../actions/pets/petsInterfaces';
import { PetsAction, types } from '../actions/types';

export interface PetsInitialStateProps {
  petsData: PetsData[] | [];
  selectedPet: PetsData | undefined;
  page: number;
  totalPages: number;
}

const initialState: PetsInitialStateProps = {
  petsData: [],
  selectedPet: undefined,
  page: 0,
  totalPages: 0,
};

export const petsReducer = (
  state: PetsInitialStateProps = initialState,
  action: PetsAction
) => {
  switch (action.type) {
    case types.UPDATE_PAGE_NUMBER:
      return { ...state, page: action.payload };

    case types.FETCH_PETS_DATA:
      return {
        ...state,
        petsData: action.payload.pets,
        totalPages: action.payload.totalPages,
      };

    case types.FETCH_SELECTED_PET:
      return { ...state, selectedPet: action.payload };

    case types.CREATE_PET:
      return { ...state, petsData: [...state.petsData, action.payload] };

    case types.UPDATE_PET:
      return {
        ...state,
        petsData: [
          ...state.petsData.filter((pet: PetsData) => pet._id !== action.payload._id),
          action.payload,
        ],
      };

    case types.DELETE_PET:
      return {
        ...state,
        petsData: state.petsData.filter((pet: PetsData) => pet._id !== action.payload),
      };

    case types.CLEAR_SELECTED_PET:
      return { ...state, selectedPet: action.payload };

    default:
      return state;
  }
};
