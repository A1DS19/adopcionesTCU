import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import { openModal } from '../../actions/modals';

export const SignedOutMenu = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleAuth = (button: 'login' | 'register') => {
    if (button === 'login') {
      dispatch(openModal({ type: 'LoginForm' }));
    } else {
      dispatch(openModal({ type: 'RegisterForm' }));
    }
  };

  return (
    <Fragment>
      <Menu.Item position='right'>
        <Button basic inverted content='LOGIN' onClick={() => handleAuth('login')} />
        <Button
          style={{ marginLeft: '0.5em' }}
          basic
          inverted
          content='REGISTRO'
          onClick={() => handleAuth('register')}
        />
      </Menu.Item>
    </Fragment>
  );
};
