import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Icon } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { StoreState } from '../../../reducers';
import { ContactForm } from './ContactForm';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailMessage: React.FC<Props> = ({ selectedPet }) => {
  const { currentUser } = useSelector((state: StoreState) => state.auth);

  return (
    <Grid style={{ marginTop: '10px' }} centered={currentUser ? false : true}>
      {currentUser && (
        <Grid.Column width={7}>
          <h2 style={{ margin: 0 }}>Departe de:</h2>
          <h3 style={{ margin: 0 }}>
            {' '}
            <Icon name='mail' /> {currentUser?.email}
          </h3>
          <p style={{ marginTop: '5px' }}>
            <Icon name='user' /> {currentUser?.name} {currentUser?.lastName}
          </p>
        </Grid.Column>
      )}
      <Grid.Column width={9}>
        <span>SU MENSAJE DEBE TENER (5000 CARACTERES COMO MAXIMO)</span>
        <ul>
          <li>Puede agregar preguntas sobre la mascota</li>
          <li>Comentarios hacia el refugio/rescates</li>
        </ul>
        <ContactForm selectedPet={selectedPet} currentUser={currentUser} />
      </Grid.Column>
    </Grid>
  );
};
