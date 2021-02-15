import React, { Fragment } from 'react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { AdopcionListItem } from './AdopcionlistItem';
import { AdopcionLoader } from './AdopcionLoader';
import { Grid } from 'semantic-ui-react';

interface AdopcionListProps {
  petsData: PetsData[];
  loadingInitial: boolean;
}

export const AdopcionList: React.FC<AdopcionListProps> = ({
  petsData,
  loadingInitial,
}): JSX.Element => {
  if (loadingInitial) {
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
      return (
        <Grid.Column key={pet.id}>
          <AdopcionListItem key={pet.id} pet={pet} />
        </Grid.Column>
      );
    }
  );

  return <Fragment>{petsData.length !== 0 && renderPets}</Fragment>;
};
