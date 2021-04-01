import { toast } from 'react-toastify';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../loading/loading';
import { Dispatch } from 'redux';
import {
  ClearSelectedPet,
  CreatePet,
  UpdatePet,
  FetchPets,
  FetchSelectedPet,
  PetsData,
  DeletePet,
  UpdatePageNumber,
} from './petsInterfaces';
import { types } from '../types';

//test api
import { api } from '../../config/axios';
import { StoreState } from '../../reducers';

export const fetchPets = (page: number, filtro?: 'disponible' | 'adoptado') => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.get(`/adoptions/pets?page=${page}`);

      let filterData;
      switch (filtro) {
        case 'disponible':
          filterData = [...data.pets.filter((pet: PetsData) => pet.adopted === 'false')];
          return dispatch<FetchPets>({
            type: types.FETCH_PETS_DATA,
            payload: { pets: filterData, totalPages: data.totalPages },
          });

        case 'adoptado':
          filterData = [...data.pets.filter((pet: PetsData) => pet.adopted === 'true')];
          return dispatch<FetchPets>({
            type: types.FETCH_PETS_DATA,
            payload: { pets: filterData, totalPages: data.totalPages },
          });

        default:
          return dispatch<FetchPets>({
            type: types.FETCH_PETS_DATA,
            payload: { pets: data.pets, totalPages: data.totalPages },
          });
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const fetchSelectedPet = (pet: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.get(`/adoptions/pet/${pet}`);
      dispatch<FetchSelectedPet>({ type: types.FETCH_SELECTED_PET, payload: data });
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const createPet = (pet: PetsData, cb: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.post('/adoptions/pet', pet);
      dispatch<CreatePet>({ type: types.CREATE_PET, payload: data });
      toast.success(data.msg);
      cb();
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const updatePet = (petId: string, pet: PetsData, cb: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.put(`/adoptions/pet/${petId}`, pet);
      dispatch<UpdatePet>({ type: types.UPDATE_PET, payload: data });
      toast.success(data.msg);
      cb();
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const deletePet = (id: string | null) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.delete(`/adoptions/pet/${id}`);
      dispatch<DeletePet>({ type: types.DELETE_PET, payload: id });
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const clearSelectedPet = (): ClearSelectedPet => {
  return {
    type: types.CLEAR_SELECTED_PET,
    payload: undefined,
  };
};

export const updatePageNumber = (page: number) => {
  return (dispatch: Dispatch, getState: () => StoreState) => {
    //let { page } = getState().pets;
    dispatch<UpdatePageNumber>({ type: types.UPDATE_PAGE_NUMBER, payload: page });
  };
};

export const addPetsPictures = (petId: string, images: any[], cb: () => void) => {
  return async (dispatch: Dispatch) => {
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append('images[]', images[i]);
    }

    // formData.append('images[]', images[0]);
    // formData.append('images[]', images[1]);
    // formData.append('images[]', images[2]);

    try {
      dispatch(asyncActionStart());
      const { data } = await api.post(`/adoptions/pet/upload/${petId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch<UpdatePet>({
        type: types.UPDATE_PET,
        payload: data,
      });
      toast.success(data.msg);
      cb();
    } catch (err) {
      toast.error(err.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const sendEmail = (petId: any, emailData: Object) => {
  return async (dispatch: Dispatch) => {
    let newEmailData = {};
    newEmailData = { ...emailData, petId };

    try {
      dispatch(asyncActionStart());
      const { data } = await api.post(`/adoptions/send`, newEmailData);
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};
