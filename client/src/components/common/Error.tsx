import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import { clearError } from '../../actions/loading/loading';
import { StoreState } from '../../reducers/index';

export const ErrorComponent = (): JSX.Element => {
  const { error } = useSelector((state: StoreState) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  });

  return (
    <Segment placeholder>
      <Header
        textAlign='center'
        content={error || 'Ha ocurrido un error inesperado...'}
      />
      <Button
        as={Link}
        to='/adoptions'
        primary
        style={{ marginTop: 20 }}
        content='Volver a adopciones'
      />
    </Segment>
  );
};
