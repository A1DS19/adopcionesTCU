import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Input, Table } from 'semantic-ui-react';
import { AuthPayload } from '../../../actions/auth';
import { fetchUsers } from '../../../actions/users/users';
import { StoreState } from '../../../reducers';
import { ErrorComponent } from '../../common/Error';
import { LoaderComponent } from '../../common/Loader';
import { UsersTableBody } from './UserTableBody';

export const UserList = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state: StoreState) => state.users);
  const { loading, error } = useSelector((state: StoreState) => state.loading);
  const [filter, setFilter] = useState('');
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <ErrorComponent />;
  }

  if (loading || (!usersData && !error)) {
    return <LoaderComponent />;
  }

  const buscarUsuario = () => {
    let user = usersData.filter(
      (user: AuthPayload) => user?.displayName!.toLowerCase() === filter.toLowerCase()
    );

    if (!user || user.length === 0) {
      return usersData;
    }

    return user;
  };

  return (
    <Fragment>
      <Input
        type='text'
        placeholder='Buscar Usuario'
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>EMAIL</Table.HeaderCell>
            <Table.HeaderCell>CONTRASENA</Table.HeaderCell>
            <Table.HeaderCell>NOMBRE</Table.HeaderCell>
            <Table.HeaderCell>APELLIDO</Table.HeaderCell>
            <Table.HeaderCell>ADMIN</Table.HeaderCell>
            <Table.HeaderCell>USUARIO</Table.HeaderCell>
            <Table.HeaderCell>CREADO</Table.HeaderCell>
            <Table.HeaderCell>FOTO</Table.HeaderCell>
            <Table.HeaderCell>ACCION</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <UsersTableBody usersData={usersData} />
        </Table.Body>
      </Table>

      <Button
        onClick={() => history.push(`/admin/users/create`)}
        color='orange'
        icon='plus'
        content='AGREGAR USUARIO'
      />
    </Fragment>
  );
};
