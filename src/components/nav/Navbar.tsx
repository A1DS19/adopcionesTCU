import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Icon, Menu } from 'semantic-ui-react';
import { signOutUser } from '../../actions/auth';
import { StoreState } from '../../reducers';
import { SignedInMenu } from './SignedInMenu';
import { SignedOutMenu } from './SignedOutMenu';

export const Navbar = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated, currentUser } = useSelector((state: StoreState) => state.auth);

  const handleLogOut = () => {
    dispatch(signOutUser());
    history.push('/');
  };

  return (
    <div id='nav'>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item header onClick={() => history.push('/')}>
            <img src='/assets/pet-house.png' alt='logo' style={{ marginRight: '15px' }} />
            ADOPTME.CR
          </Menu.Item>

          <Menu.Item as={NavLink} to='/adoptions' name='ADOPCIONES' />

          <Menu.Item as={NavLink} to='/favorites'>
            <Icon name='heart' size='large' />
          </Menu.Item>

          {authenticated ? (
            <SignedInMenu currentUser={currentUser} handleSignOut={handleLogOut} />
          ) : (
            <SignedOutMenu />
          )}
        </Container>
      </Menu>
    </div>
  );
};
