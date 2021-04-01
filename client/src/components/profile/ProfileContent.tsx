import React from 'react';
import { Header, Segment, Tab } from 'semantic-ui-react';
import { MisDatosTab } from './MisDatosTab';
import { AuthPayload } from '../../actions/auth';
import { AjustesCuenta } from './AjustesCuenta';

interface Props {
  currentUser: AuthPayload | null;
  loading: boolean;
  error: string | null;
}

export const ProfileContent: React.FC<Props> = ({ currentUser, loading, error }) => {
  const panes = [
    {
      menuItem: 'Mis Datos',
      render: () => <MisDatosTab loading={loading} currentUser={currentUser} />,
    },
    {
      menuItem: 'Ajustes de Cuenta',
      render: () => <AjustesCuenta loading={loading} currentUser={currentUser} />,
    },
  ];

  return (
    <Segment loading={loading}>
      <Header as='h1' content='Mi Perfil' />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Segment>
  );
};
