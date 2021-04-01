import {
  CreateUser,
  FetchUsers,
  FetchSelectedUser,
  UpdateUser,
  DeleteUser,
  ClearSelectedUser,
} from './userInterfaces';
import { Dispatch } from 'redux';
import { api } from '../../config/axios';
import { AuthPayload } from '../auth';
import { asyncActionFinish, asyncActionStart } from '../loading/loading';
import { types } from '../types';
import { toast } from 'react-toastify';

export const createUser = (user: AuthPayload, cb: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.post('/admin/user', user);
      dispatch<CreateUser>({ type: types.CREATE_USER, payload: data });
      toast.success(`Usuario ${data.name} ${data.lastName} creado`);
      cb();
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const updateUserData = (
  userId: string | null,
  user: AuthPayload,
  cb: () => void
) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.put(`/admin/user/${userId}`, user);
      dispatch<UpdateUser>({ type: types.UPDATE_USER, payload: data });
      toast.success(data.msg);
      cb();
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const deleteUser = (userId: string | null) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.delete(`/admin/user/${userId}`);
      dispatch<DeleteUser>({ type: types.DELETE_USER, payload: userId! });
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const fetchSelectedUser = (userId: string | null) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.get(`/admin/user/${userId}`);
      dispatch<FetchSelectedUser>({ type: types.FETCH_SELECTED_USER, payload: data });
    } catch (error) {
      toast.error(error.response);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(asyncActionStart());
      const { data } = await api.get('/admin/users');
      dispatch<FetchUsers>({ type: types.FETCH_USERS_DATA, payload: data });
    } catch (error) {
      toast.error(error.response);
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const clearSelectedUser = (): ClearSelectedUser => {
  return {
    type: types.CLEAR_SELECTED_USER,
    payload: undefined,
  };
};
