import * as modals from './modals';
import * as auth from './auth';
import * as pets from './pets/petsInterfaces';
import * as loading from './loading/loadingInterfaces';

export enum types {
  //Modals
  OPEN_MODAL,
  CLOSE_MODAL,
  //Auth
  SIGNED_IN,
  SIGNED_OUT,
  //Pets
  FETCH_PETS_DATA,
  FETCH_SELECTED_PET,
  CREATE_PETS,
  DELETE_PETS,
  UPDATE_PETS,
  //loading
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
  APP_LOADED,
}

export type ModalAction = modals.OpenModalAction | modals.CloseModalAction;
export type AuthAction = auth.SignInAction | auth.SignOutAction;
export type PetsAction = pets.FetchPets | pets.FetchSelectedPet;
export type LoadingAction =
  | loading.AsyncActionError
  | loading.AsyncActionStart
  | loading.AsyncActionFinish
  | loading.AppLoaded;
