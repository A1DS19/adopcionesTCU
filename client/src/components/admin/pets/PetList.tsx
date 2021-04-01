import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Input, Table, Menu, Icon, Pagination } from 'semantic-ui-react';
import { fetchPets, updatePageNumber } from '../../../actions/pets/pets';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { StoreState } from '../../../reducers';
import { ErrorComponent } from '../../common/Error';
import { LoaderComponent } from '../../common/Loader';
import { PetsTableBody } from './PetsTableBody';

export const PetList = () => {
  const dispatch = useDispatch();
  const { petsData, page, totalPages } = useSelector((state: StoreState) => state.pets);
  const { loading, error } = useSelector((state: StoreState) => state.loading);
  const [filter, setFilter] = useState('');
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPets(page));
  }, [dispatch, page]);

  if (error) {
    return <ErrorComponent />;
  }

  if (loading || (!petsData && !error)) {
    return <LoaderComponent />;
  }

  const buscarMascota = () => {
    let pet = petsData.filter(
      (pet: PetsData) => pet.name.toLowerCase() === filter.toLowerCase()
    );

    if (!pet || pet.length === 0) {
      return petsData;
    }

    return pet;
  };

  return (
    <Fragment>
      <Input
        type='text'
        placeholder='Buscar Mascota'
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>NOMBRE</Table.HeaderCell>
            <Table.HeaderCell>UBICACION</Table.HeaderCell>
            <Table.HeaderCell>RAZA</Table.HeaderCell>
            <Table.HeaderCell>ADOPTADO</Table.HeaderCell>
            <Table.HeaderCell>FOTOS</Table.HeaderCell>
            <Table.HeaderCell>DESCRIPCCION</Table.HeaderCell>
            <Table.HeaderCell>ACCION</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <PetsTableBody petsData={buscarMascota()} />
        </Table.Body>

        <Table.Footer>
          <Pagination
            activePage={page + 1}
            totalPages={totalPages}
            onPageChange={(event, data) => {
              dispatch(updatePageNumber((data.activePage as number) - 1));
            }}
          />
        </Table.Footer>
      </Table>

      <Button
        onClick={() => history.push(`/admin/pets/create`)}
        color='orange'
        icon='plus'
        content='AGREGAR MASCOTA'
      />
    </Fragment>
  );
};
