import React, { Fragment, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from 'semantic-ui-react';
import { usePetData } from '../../../hooks/usePet';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedPet, fetchSelectedPet } from '../../../actions/pets/pets';
import { StoreState } from '../../../reducers';
import { AdopcionDetailInfo } from './AdopcionDetailInfo';
import { AdopcionDetailSidebar } from './AdopcionDetailSidebar';
import { AdopcionDetailContact } from './AdopcionDetailContact';
import { AdopcionDetailPetBreedList } from './AdopcionDetailPetBreedList';
import { LoaderComponent } from '../../common/Loader';
import { ErrorComponent } from '../../common/Error';

export interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export const AdopcionDetail = ({ match }: Props) => {
  const petId = match.params.id;
  const { petsData, selectedPet } = useSelector((state: StoreState) => state.pets);
  const { authenticated } = useSelector((state: StoreState) => state.auth);
  const { loading, error } = useSelector((state: StoreState) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectedPet(petId.toString()!));
    return () => {
      dispatch(clearSelectedPet());
    };
  }, [dispatch, petId]);

  if (error) {
    return <ErrorComponent />;
  }

  if (loading || (!petsData && !error)) {
    return <LoaderComponent />;
  }

  return (
    <Fragment>
      <Grid columns={3} relaxed='very'>
        <Grid.Row>
          <Grid.Column width={16}>
            {selectedPet?.photosUrl && (
              <Carousel
                autoPlay
                // {dynamicHeight}
                infiniteLoop
                showStatus={false}
                showThumbs={false}
              >
                {selectedPet?.photosUrl!.map((photo, index) => (
                  <div style={{ height: '320px' }} key={index}>
                    <img src={photo} alt='pic' />
                  </div>
                ))}
              </Carousel>
            )}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={10}>
            <AdopcionDetailInfo selectedPet={selectedPet} />
          </Grid.Column>
          <Grid.Column width={6}>
            <AdopcionDetailSidebar selectedPet={selectedPet} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row id='contact-form'>
          <Grid.Column width={16}>
            <AdopcionDetailContact
              authenticated={authenticated}
              selectedPet={selectedPet}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <AdopcionDetailPetBreedList petsData={petsData} selectedPet={selectedPet} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};
