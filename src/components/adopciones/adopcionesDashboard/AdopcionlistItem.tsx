import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';
import { toast } from 'react-toastify';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { format } from 'date-fns';

interface EventListItemProps {
  pet: PetsData;
}

export const AdopcionListItem: React.FC<EventListItemProps> = ({ pet }): JSX.Element => {
  const { authenticated } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = (eventId: any) => {
    try {
      console.log(eventId);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Card fluid as={Link} to={`/adoption/${pet.id}`}>
      <Image
        fluid
        label={{
          color: `${pet.adopted ? 'red' : 'green'}`,
          content: `${pet.adopted ? 'Adoptado' : 'Disponible'}`,
          ribbon: 'right',
        }}
        src={pet.photosUrl[0]}
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
        {authenticated && (
          <Button
            style={{ marginTop: '10px' }}
            fluid
            onClick={() => handleDelete(1)}
            color='red'
            content='Borrar'
          />
        )}
      </Card.Content>
    </Card>
  );
};
