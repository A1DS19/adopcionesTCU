import { types } from '../types';
import { AuthPayload } from '../auth';

export interface FetchUsers {
  type: types.FETCH_USERS_DATA;
  payload: AuthPayload[];
}

export interface FetchSelectedUser {
  type: types.FETCH_SELECTED_USER;
  payload: AuthPayload | undefined;
}

export interface ClearSelectedUser {
  type: types.CLEAR_SELECTED_USER;
  payload: undefined;
}

export interface CreateUser {
  type: types.CREATE_USER;
  payload: AuthPayload;
}

export interface UpdateUser {
  type: types.UPDATE_USER;
  payload: AuthPayload;
}

export interface DeleteUser {
  type: types.DELETE_USER;
  payload: string;
}
