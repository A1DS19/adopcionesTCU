import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Card, Divider, Grid, Header, Item, Segment } from 'semantic-ui-react';
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
    (pet: PetsData) => pet.breed === selectedPet?.breed && pet.id !== selectedPet.id
  );

  const renderCurrentBreedPets = currentBreedPets
    .map((pet: PetsData) => (
      <AdopcionDetailListItem key={pet.id} selectedBreedPet={pet} />
    ))
    .slice(0, 3);

  return (
    <Fragment>
      {currentBreedPets && (
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
