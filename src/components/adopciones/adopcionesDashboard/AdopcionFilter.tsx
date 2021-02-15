import React, { Fragment } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';

interface Props {
  loading?: any;
}

export const AdopcionFilters = ({ loading }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: StoreState) => state.auth);

  return (
    <Fragment>
      <Menu fluid vertical size='large' style={{ width: '100%' }}>
        <Header icon='filter' attached color='orange' content='Filtros' />
        <Menu.Item
          disabled={loading}
          active={false}
          onClick={() => console.log('todos')}
          content='Todos los animales'
        />
        <Menu.Item
          disabled={loading}
          active={false}
          onClick={() => console.log('disponibles')}
          content='Animales disponibles'
        />
        <Menu.Item
          disabled={loading}
          active={false}
          onClick={() => console.log('adoptados')}
          content='Animales adoptados'
        />
      </Menu>
    </Fragment>
  );
};
