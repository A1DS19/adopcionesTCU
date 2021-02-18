import React from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { Link } from 'react-scroll';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailSidebar: React.FC<Props> = ({ selectedPet }) => {
  return (
    <Segment textAlign='center'>
      <Button.Group vertical>
        <Button
          style={{ marginBottom: '10px' }}
          as={Link}
          basic
          to='contact-form'
          spy={true}
          smooth={true}
          size='medium'
          color='orange'
          content={`PREGUNTAR ACERCA DE ${selectedPet?.name.toLocaleUpperCase()}`}
        />
        <Button style={{ marginBottom: '10px' }} basic size='medium' color='orange'>
          <Icon name='heart outline' /> AGREGAR A FAVORITOS
        </Button>
        <Button basic color='orange' size='medium' animated='vertical'>
          <Button.Content hidden content={<Icon name='share' />} />
          <Button.Content visible content='COMPARTIR' />
        </Button>
      </Button.Group>
    </Segment>
  );
};
