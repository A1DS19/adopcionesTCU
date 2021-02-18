import React from 'react';
import { Header, Segment, Tab } from 'semantic-ui-react';
import { AuthPayload } from '../../actions/auth';

interface Props {
  currentUser: AuthPayload | null;
}

const panes = [
  {
    menuItem: 'Mis Datos',
    render: () => <Tab.Pane attached={false}>Mis Datos</Tab.Pane>,
  },
  {
    menuItem: 'Ajustes de Cuenta',
    render: () => <Tab.Pane attached={false}>Ajustes de Cuenta</Tab.Pane>,
  },
];

export const ProfileContent: React.FC<Props> = ({ currentUser }) => {
  return (
    <Segment>
      <Header as='h1' content='Mi Perfil' />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Segment>
  );
};
