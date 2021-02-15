import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { StoreState } from '../../../reducers';
import { ContactForm } from './ContactForm';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailMessage: React.FC<Props> = ({ selectedPet }) => {
  const { currentUser } = useSelector((state: StoreState) => state.auth);
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Grid.Column width={7}>
        <h3 style={{ margin: 0 }}>Departe</h3>
        {currentUser?.name || 'nombre'} {currentUser?.lastName || 'apellido'}
        <br />
        {currentUser?.email || 'email'}
      </Grid.Column>
      <Grid.Column width={9}>
        <span>SU MENSAJE DEBE TENER (5000 CARACTERES COMO MAXIMO)</span>
        <ul>
          <li>Puede agregar preguntas sobre el animal</li>
          <li>Comentarios hacia el refugio/rescates</li>
        </ul>
        <ContactForm selectedPet={selectedPet} />
      </Grid.Column>
    </Grid>
  );
};
