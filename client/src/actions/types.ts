import * as modals from './modals';
import * as auth from './auth';
import * as pets from './pets/petsInterfaces';
import * as users from './users/userInterfaces';
import * as loading from './loading/loadingInterfaces';

export enum types {
  //Modals
  OPEN_MODAL,
  CLOSE_MODAL,
  //Auth
  SIGNED_IN,
  SIGNED_OUT,
  FETCH_CURRENT_USER,
  UPDATE_CURRENT_USER,
  //Pets
  FETCH_PETS_DATA,
  FETCH_SELECTED_PET,
  CLEAR_SELECTED_PET,
  CREATE_PET,
  DELETE_PET,
  UPDATE_PET,
  UPDATE_PAGE_NUMBER,
  //loading
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
  CLEAR_ERROR,
  APP_LOADED,
  //users
  FETCH_USERS_DATA,
  FETCH_SELECTED_USER,
  CLEAR_SELECTED_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
}

export type ModalAction = modals.OpenModalAction | modals.CloseModalAction;

export type AuthAction =
  | auth.SignInAction
  | auth.SignOutAction
  | auth.FetchCurrentUserAction
  | auth.UpdateCurrentUserAction;

export type PetsAction =
  | pets.FetchPets
  | pets.FetchSelectedPet
  | pets.ClearSelectedPet
  | pets.CreatePet
  | pets.UpdatePet
  | pets.DeletePet
  | pets.UpdatePageNumber;

export type UsersAction =
  | users.FetchUsers
  | users.FetchSelectedUser
  | users.ClearSelectedUser
  | users.CreateUser
  | users.UpdateUser
  | users.DeleteUser;

export type LoadingAction =
  | loading.AsyncActionError
  | loading.AsyncActionStart
  | loading.AsyncActionFinish
  | loading.CLearErrorAction
  | loading.AppLoaded;
