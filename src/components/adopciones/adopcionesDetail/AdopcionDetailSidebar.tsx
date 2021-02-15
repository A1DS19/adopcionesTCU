import React, { Fragment } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { Link } from 'react-scroll';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailSidebar: React.FC<Props> = ({ selectedPet }) => {
  return (
    <Fragment>
      <Segment
        style={{ border: 'none' }}
        attached
        inverted
        textAlign='center'
        color='orange'
      >
        <Button.Group vertical>
          <Button
            as={Link}
            to='contact-form'
            spy={true}
            smooth={true}
            size='medium'
            inverted
            style={{ marginBottom: '15px' }}
            content={`PREGUNTAR ACERCA DE ${selectedPet?.name.toLocaleUpperCase()}`}
          />
          <Button inverted size='medium'>
            <Icon name='heart outline' /> AGREGAR A FAVORITOS
          </Button>
        </Button.Group>
      </Segment>

      <Button color='red' size='medium' attached='bottom'>
        <Icon name='share' /> COMPARTIR
      </Button>
    </Fragment>
  );
};
