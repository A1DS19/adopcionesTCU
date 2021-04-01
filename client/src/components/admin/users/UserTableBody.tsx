import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Confirm, Icon, Table } from 'semantic-ui-react';
import { AuthPayload } from '../../../actions/auth';
import { deleteUser } from '../../../actions/users/users';
import { format } from 'date-fns';

interface Props {
  usersData: AuthPayload[];
}

export const UsersTableBody: React.FC<Props> = ({ usersData }) => {
  const [openConfirm, setConfirm] = useState(false);
  const [userToDelete, setUserToDelete] = useState({ id: 0, name: '' });
  const history = useHistory();
  const dispatch = useDispatch();

  const openDeleteConfirm = (id: number, name: string) => {
    setUserToDelete({ id, name });
    setConfirm(true);
  };

  const handleDelete = (id: number | undefined) => {
    dispatch(deleteUser(id?.toString()!));
  };

  return (
    <Fragment>
      {usersData.map((user: AuthPayload) => (
        <Table.Row key={user._id}>
          <Table.Cell content={user._id.slice(0, 5) + '...'} />
          <Table.Cell content={user.email} />
          <Table.Cell content={user.password.slice(0, 7) + '...'} />
          <Table.Cell content={user.name} />
          <Table.Cell content={user.lastName} />
          <Table.Cell
            content={
              JSON.parse(user?.isAdmin!) ? (
                <Icon color='green' name='check' />
              ) : (
                <Icon color='red' name='x' />
              )
            }
          />
          <Table.Cell content={user.displayName?.slice(0, 5) + '...'} />
          <Table.Cell content={format(new Date(user.createdAt!), 'dd/mm/yyyy')} />
          <Table.Cell
            content={
              user?.photoURL ? (
                user.photoURL! ? (
                  <Icon color='green' name='check' />
                ) : (
                  <Icon color='red' name='x' />
                )
              ) : (
                <Icon color='red' name='x' />
              )
            }
          />
          <Table.Cell>
            <Icon
              link
              onClick={() => history.push(`/admin/users/${user._id}`)}
              size='large'
              name='edit'
            />
            <Icon
              link
              onClick={() => openDeleteConfirm(user._id!, user.name! || user.email)}
              size='large'
              color='red'
              name='delete'
            />
          </Table.Cell>
        </Table.Row>
      ))}
      <Confirm
        content={`Esta seguro que desea eliminar a ${userToDelete.name}?`}
        cancelButton='CANCELAR'
        confirmButton='ELIMINAR'
        size='small'
        open={openConfirm}
        onCancel={() => setConfirm(false)}
        onConfirm={() => handleDelete(userToDelete.id)}
      />
    </Fragment>
  );
};
