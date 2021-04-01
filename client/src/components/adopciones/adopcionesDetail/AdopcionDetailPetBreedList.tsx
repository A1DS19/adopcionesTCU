import React, { Fragment } from 'react';
import { Card, Header, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { AdopcionDetailListItem } from './AdopcionDetailListItem';

interface Props {
  selectedPet: PetsData | undefined;
  petsData: PetsData[];
}

export const AdopcionDetailPetBreedList: React.FC<Props> = ({
  selectedPet,
  petsData,
}): JSX.Element => {
  //Encuentra los animales cuya raza sea igual a
  //del animal seleccionado
  const currentBreedPets = petsData.filter(
    (pet: PetsData) => pet.breed === selectedPet?.breed && pet._id !== selectedPet.id
  );

  const renderCurrentBreedPets = currentBreedPets
    .map((pet: PetsData) => (
      <AdopcionDetailListItem key={pet._id} selectedBreedPet={pet} />
    ))
    .slice(0, 3);

  return (
    <Fragment>
      {currentBreedPets.length !== 0 && (
        <Segment>
          <Header
            textAlign='center'
            as='h1'
            content={`Mas rescates de raza ${selectedPet?.breed}`}
          />
          <Card.Group itemsPerRow={3} doubling stackable>
            {renderCurrentBreedPets}
          </Card.Group>
        </Segment>
      )}
    </Fragment>
  );
};
