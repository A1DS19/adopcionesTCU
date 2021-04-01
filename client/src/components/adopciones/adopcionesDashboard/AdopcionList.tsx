import React, { Fragment } from 'react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { AdopcionListItem } from './AdopcionlistItem';
import { AdopcionLoader } from './AdopcionLoader';
import { Card, Icon, Loader, Message } from 'semantic-ui-react';

interface AdopcionListProps {
  petsData: PetsData[];
  loading: boolean;
}

export const AdopcionList: React.FC<AdopcionListProps> = ({
  petsData,
  loading,
}): JSX.Element => {
  if (loading) {
    return (
      <Fragment>
        <AdopcionLoader />
        <AdopcionLoader />
        <AdopcionLoader />
      </Fragment>
    );
  }

  const renderPets = petsData?.map(
    (pet: PetsData): JSX.Element => {
      return <AdopcionListItem key={pet._id} pet={pet} />;
    }
  );

  const renderLoader = () => {
    return (
      <Message icon>
        <Icon name='circle notched' loading={loading} />
        <Message.Content>
          <Message.Header>Espere un segundo...</Message.Header>
          Estamos cargando mas contenido
        </Message.Content>
      </Message>
    );
  };

  const renderEndMessage = () => {
    return <Message icon='warning' header='Ya no hay mas contenido' />;
  };

  return (
    <Fragment>
      {petsData.length !== 0 ? (
        <Card.Group itemsPerRow={2} doubling stackable>
          {renderPets}
        </Card.Group>
      ) : (
        <Message icon='warning' header='Ya no hay mas contenido' />
      )}
    </Fragment>
  );
};
