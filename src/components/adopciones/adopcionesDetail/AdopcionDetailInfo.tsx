import React from 'react';
import { Divider, Icon, Item, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailInfo: React.FC<Props> = ({ selectedPet }) => {
  return (
    <Segment>
      <Item.Group>
        <Item.Content>
          <Item.Header as='h1' content={selectedPet?.name} />
          <Divider />
          <Item.Meta>
            <Icon name='paw' /> {selectedPet?.breed}
            <br />
            <Icon name='point' />
            {selectedPet?.location}
          </Item.Meta>
          <Divider />
          <Item.Header as='h3' content='Acerca' />
          <Item.Header as='h5' content='Caracteristicas' />
          <Item.Description>{selectedPet?.description}</Item.Description>
        </Item.Content>
      </Item.Group>
    </Segment>
  );
};
