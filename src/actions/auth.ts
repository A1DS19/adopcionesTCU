import { Dispatch } from 'redux';
import { types } from './types';

export interface AuthPayload {
  id?: string;
  email: string;
  password: string;
  name?: string;
  lastName?: string;
  role?: string;
  displayName?: string;
  createdAt?: Date;
  photoURL?: string;
}

export interface SignInAction {
  type: types.SIGNED_IN;
  payload: AuthPayload;
}

export interface SignOutAction {
  type: types.SIGNED_OUT;
}

export const signInUser = (user: AuthPayload) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<SignInAction>({ type: types.SIGNED_IN, payload: user });
    } catch (error) {
      throw error;
    }
  };
};

export const registerUser = (user: AuthPayload) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<SignInAction>({ type: types.SIGNED_IN, payload: user });
    } catch (error) {
      throw error;
    }
  };
};

export const signOutUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<SignOutAction>({ type: types.SIGNED_OUT });
    } catch (error) {
      throw error;
    }
  };
};
