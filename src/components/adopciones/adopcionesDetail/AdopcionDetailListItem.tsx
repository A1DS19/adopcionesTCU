import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PetsData } from '../../../actions/pets/petsInterfaces';

interface EventListItemProps {
  selectedBreedPet: PetsData;
}

export const AdopcionDetailListItem: React.FC<EventListItemProps> = ({
  selectedBreedPet,
}): JSX.Element => {
  return (
    <Card as={Link} to={`/adoption/${selectedBreedPet.id}`}>
      <Image fluid src={selectedBreedPet.photosUrl[0]} />
      <Card.Content textAlign='center'>
        <Card.Header>
          {' '}
          <p style={{ color: 'orange' }}>{selectedBreedPet.name}</p>{' '}
        </Card.Header>
        <Card.Meta>
          <Icon name='point' /> {selectedBreedPet.location}
        </Card.Meta>
        <Card.Description>{selectedBreedPet.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};
