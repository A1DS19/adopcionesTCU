import { UsersAction } from './../actions/types';
import { AuthPayload } from './../actions/auth';
import { types } from '../actions/types';

export interface UsersInitialStateProps {
  usersData: AuthPayload[] | [];
  selectedUser: AuthPayload | undefined;
}

const initialState: UsersInitialStateProps = {
  usersData: [],
  selectedUser: undefined,
};

export const usersReducer = (
  state: UsersInitialStateProps = initialState,
  action: UsersAction
) => {
  switch (action.type) {
    case types.FETCH_USERS_DATA:
      return { ...state, usersData: action.payload };

    case types.FETCH_SELECTED_USER:
      return { ...state, selectedUser: action.payload };

    case types.CREATE_USER:
      return { ...state, usersData: [...state.usersData, action.payload] };

    case types.UPDATE_USER:
      return {
        ...state,
        usersData: [
          ...state.usersData.filter(
            (user: AuthPayload) => user._id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case types.DELETE_USER:
      return {
        ...state,
        usersData: state.usersData.filter(
          (user: AuthPayload) => user._id !== action.payload
        ),
      };

    case types.CLEAR_SELECTED_USER:
      return { ...state, selectedUser: action.payload };

    default:
      return state;
  }
};
