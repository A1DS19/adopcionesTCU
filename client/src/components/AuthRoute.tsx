import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { StoreState } from '../reducers';

interface Props {
  Component?: any;
  prevLocation?: any;
  path?: any;
  rest?: any;
}

export const AuthRoute = ({ Component, prevLocation, ...rest }: Props) => {
  const { authenticated } = useSelector((state: StoreState) => state.auth);
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/');
    return <div></div>;
  };

  return (
    <Route
      {...rest}
      render={(props) => (authenticated ? <Component {...props} /> : handleRedirect())}
    />
  );
};
