import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Grid, Header, Item, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { StoreState } from '../../../reducers';
import { AdopcionDetailListItem } from './AdopcionDetailListItem';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailPetBreedList: React.FC<Props> = ({
  selectedPet,
}): JSX.Element => {
  const selectedBreedPets = useSelector((state: StoreState) =>
    (state.pets?.petsData as Array<any>)
      .map((pet: PetsData) => {
        if (pet.breed === selectedPet?.breed && !pet.adopted) {
          return (
            <Grid.Column key={pet.id}>
              <AdopcionDetailListItem key={pet.id} selectedBreedPet={pet} />
            </Grid.Column>
          );
        }
        return null;
      })
      .slice(0, 3)
  );

  return (
    <Segment>
      <Header
        textAlign='center'
        as='h1'
        content={`Mas rescates de raza ${selectedPet?.breed}`}
      />
      <div style={{ display: 'flex' }}>{selectedBreedPets}</div>
    </Segment>
  );
};
