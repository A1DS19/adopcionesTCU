import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { PetsData } from '../../../actions/pets/petsInterfaces';

interface EventListItemProps {
  pet: PetsData;
}

export const AdopcionListItem: React.FC<EventListItemProps> = ({ pet }): JSX.Element => {
  const dispatch = useDispatch();
  const handleDelete = (eventId: any) => {
    try {
      console.log(eventId);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Card fluid as={Link} to={`/adoption/${pet._id}`}>
      <Image
        fluid
        label={{
          color: `${JSON.parse(pet.adopted) ? 'red' : 'green'}`,
          content: `${JSON.parse(pet.adopted) ? 'Adoptado' : 'Disponible'}`,
          ribbon: 'right',
        }}
        src={pet?.photosUrl?.length! > 0 ? pet.photosUrl![0] : '/assets/pet-house.png'}
      />
      <Card.Content textAlign='center'>
        <Card.Header>
          {' '}
          <p style={{ color: 'orange' }}>{pet.name}</p>{' '}
        </Card.Header>
        <Card.Meta>
          <Icon name='point' /> {pet.location}
        </Card.Meta>
        <Card.Description>{pet.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};
