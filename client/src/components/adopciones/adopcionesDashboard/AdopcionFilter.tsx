import React, { Fragment } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';
import { fetchPets } from '../../../actions/pets/pets';

interface Props {
  loading?: any;
}

export const AdopcionFilters = ({ loading }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: StoreState) => state.auth);
  const { page } = useSelector((state: StoreState) => state.pets);

  return (
    <Fragment>
      <Menu fluid vertical size='large' style={{ width: '100%' }}>
        <Header icon='filter' attached color='orange' content='Filtros' />
        <Menu.Item
          disabled={loading}
          active={false}
          onClick={() => dispatch(fetchPets(page))}
          content='Todas las Mascotas'
        />
        <Menu.Item
          disabled={loading}
          active={false}
          onClick={() => dispatch(fetchPets(page, 'disponible'))}
          content='Mascotas Disponibles'
        />
        <Menu.Item
          disabled={loading}
          active={false}
          onClick={() => dispatch(fetchPets(page, 'adoptado'))}
          content='Mascotas Adoptadas'
        />
      </Menu>
    </Fragment>
  );
};
