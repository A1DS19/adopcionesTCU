import React, { Fragment } from 'react';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AuthPayload } from '../../actions/auth';

interface Props {
  handleSignOut: () => void;
  currentUser: AuthPayload | null;
}

export const SignedInMenu: React.FC<Props> = (props): JSX.Element => {
  return (
    <Fragment>
      <Menu.Item position='right'>
        <Image
          avatar
          spaced='right'
          src={props.currentUser?.photoURL || '/assets/user.png'}
        />
        <Dropdown pointing='top left' text={props.currentUser?.displayName}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/' text='MI PERFIL' icon='user' />
            <Dropdown.Item text='SALIR' icon='power' onClick={props.handleSignOut} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Fragment>
  );
};
