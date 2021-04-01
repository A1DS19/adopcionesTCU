import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { closeModal } from '../../actions/modals';

const SocialLogin = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(closeModal());
  };

  return (
    <Fragment>
      <Button
        icon='facebook'
        fluid
        color='facebook'
        content='Login con Facebook'
        style={{ marginBottom: 10 }}
        onClick={() => handleModal()}
      />
      <Button
        icon='google'
        fluid
        color='google plus'
        content='Login con Google'
        style={{ marginBottom: 10 }}
        onClick={() => handleModal()}
      />
    </Fragment>
  );
};

export { SocialLogin };
