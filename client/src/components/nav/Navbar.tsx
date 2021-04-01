import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Icon, Menu } from 'semantic-ui-react';
import { fetchCurrentUser, signOutUser } from '../../actions/auth';
import { StoreState } from '../../reducers';
import { SignedInMenu } from './SignedInMenu';
import { SignedOutMenu } from './SignedOutMenu';

export const Navbar = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated, currentUser, userId } = useSelector(
    (state: StoreState) => state.auth
  );

  useEffect(() => {
    dispatch(fetchCurrentUser(userId));
  }, [dispatch, userId]);

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

          <Menu.Item as={NavLink} to='/adoptions' name='MASCOTAS' />

          {authenticated ? (
            <Fragment>
              {/* <Menu.Item as={NavLink} to='/favorites'>
                <Icon name='heart' size='large' />
              </Menu.Item> */}
              <SignedInMenu currentUser={currentUser!} handleSignOut={handleLogOut} />
            </Fragment>
          ) : (
            <SignedOutMenu />
          )}
        </Container>
      </Menu>
    </div>
  );
};
