import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../loading/loading';
import { Dispatch } from 'redux';
import { FetchPets, FetchSelectedPet, PetsData } from './petsInterfaces';
import { types } from '../types';

//test api
import { pets } from '../../api/pets';

export const fetchPets = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      dispatch<FetchPets>({ type: types.FETCH_PETS_DATA, payload: pets });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error.message));
    }
  };
};

export const fetchSelectedPet = (pet: PetsData | undefined) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      dispatch<FetchSelectedPet>({ type: types.FETCH_SELECTED_PET, payload: pet });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error.message));
    }
  };
};
