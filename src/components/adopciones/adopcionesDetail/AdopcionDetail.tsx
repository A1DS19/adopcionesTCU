import React, { Fragment, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from 'semantic-ui-react';
import { usePetData } from '../../../hooks/usePet';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets, fetchSelectedPet } from '../../../actions/pets/pets';
import { StoreState } from '../../../reducers';
import { AdopcionDetailInfo } from './AdopcionDetailInfo';
import { AdopcionDetailSidebar } from './AdopcionDetailSidebar';
import { AdopcionDetailContact } from './AdopcionDetailContact';
import { AdopcionDetailPetBreedList } from './AdopcionDetailPetBreedList';

export interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export const AdopcionDetail = ({ match }: Props) => {
  const petId = parseInt(match.params.id);
  const selectedPetData = usePetData(petId);
  const { selectedPet } = useSelector((state: StoreState) => state.pets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
    dispatch(fetchSelectedPet(selectedPetData));

    return () => {
      dispatch(fetchSelectedPet(undefined));
    };
  }, [dispatch, selectedPetData]);

  return (
    <Fragment>
      <Grid columns={3} relaxed='very'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Carousel
              autoPlay
              // {dynamicHeight}
              infiniteLoop
              showStatus={false}
              showThumbs={false}
            >
              {selectedPet?.photosUrl.map((photo, index) => (
                <div style={{ height: '320px' }} key={index}>
                  <img src={photo} alt='pic' />
                </div>
              ))}
            </Carousel>
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
            <AdopcionDetailContact selectedPet={selectedPet} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <AdopcionDetailPetBreedList selectedPet={selectedPet} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};
