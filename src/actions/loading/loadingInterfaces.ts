import { types } from '../types';

export interface LoadingState {
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

export interface AsyncActionStart {
  type: types.ASYNC_ACTION_START;
}

export interface AsyncActionFinish {
  type: types.ASYNC_ACTION_FINISH;
}

export interface AsyncActionError {
  type: types.ASYNC_ACTION_ERROR;
  payload: string;
}
export interface AppLoaded {
  type: types.APP_LOADED;
  payload: boolean;
}
