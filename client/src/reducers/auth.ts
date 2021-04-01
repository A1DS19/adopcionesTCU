import { AuthAction } from './../actions/types';
import { types } from '../actions/types';
import { AuthPayload } from '../actions/auth';

export interface AuthInitialStateProps {
  authenticated: boolean;
  currentUser?: AuthPayload | null;
  userId: string | null;
}

const initialState: AuthInitialStateProps = {
  authenticated: false,
  currentUser: null,
  userId: null,
};

export const authReducer = (
  state: AuthInitialStateProps = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case types.SIGNED_IN:
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload,
      };

    case types.FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case types.UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case types.SIGNED_OUT:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };

    default:
      return state;
  }
};
