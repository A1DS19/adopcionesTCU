import { UsersInitialStateProps, usersReducer } from './users';
import { loadingReducer } from './loading';
import { PetsInitialStateProps, petsReducer } from './pets';
import { combineReducers } from 'redux';
import { ModalPayload } from '../actions/modals';
import { modalsReducer } from './modals';
import { authReducer, AuthInitialStateProps } from './auth';
import { LoadingState } from '../actions/loading/loadingInterfaces';

export interface StoreState {
  modals: ModalPayload | null;
  auth: AuthInitialStateProps;
  users: UsersInitialStateProps;
  pets: PetsInitialStateProps;
  loading: LoadingState;
}

export const reducers = combineReducers<StoreState>({
  modals: modalsReducer,
  auth: authReducer,
  users: usersReducer,
  pets: petsReducer,
  loading: loadingReducer,
});
