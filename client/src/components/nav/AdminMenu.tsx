import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

export const AdminMenu = () => {
  return (
    <Menu.Item>
      <Image avatar spaced='right' src='/assets/admin.png' />
      <Dropdown pointing='top left' text='Admin'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/admin/pets' icon='paw' text='Mascotas' />
          <Dropdown.Item as={Link} to='/admin/users' icon='user' text='Usuarios' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};
