import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { StoreState } from '../reducers';

interface Props {
  Component?: any;
  prevLocation?: any;
  path?: any;
  rest?: any;
  exact?: any;
}

export const AdminRoute = ({ Component, prevLocation, exact, ...rest }: Props) => {
  const { currentUser } = useSelector((state: StoreState) => state.auth);
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/');
    return <div></div>;
  };

  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        currentUser && currentUser.isAdmin ? <Component {...props} /> : handleRedirect()
      }
    />
  );
};
