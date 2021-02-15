import { PetsData } from '../actions/pets/petsInterfaces';
import { PetsAction, types } from '../actions/types';

export interface PetsInitialStateProps {
  petsData: PetsData[] | [];
  selectedPet: PetsData | undefined;
}

const initialState: PetsInitialStateProps = {
  petsData: [],
  selectedPet: undefined,
};

export const petsReducer = (
  state: PetsInitialStateProps = initialState,
  action: PetsAction
) => {
  switch (action.type) {
    case types.FETCH_PETS_DATA:
      return { ...state, petsData: action.payload };

    case types.FETCH_SELECTED_PET:
      return { ...state, selectedPet: action.payload };

    default:
      return state;
  }
};
