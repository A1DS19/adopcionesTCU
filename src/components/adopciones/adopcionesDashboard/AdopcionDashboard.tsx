import React, { Fragment, useEffect, useState } from 'react';
import { Divider, Grid, Loader, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../reducers/index';
import { AdopcionFilters } from './AdopcionFilter';
import { AdopcionList } from './AdopcionList';
import * as petsActions from '../../../actions/pets/pets';

export const AdopcionDashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const [loadingInitial, setLoadingInitial] = useState(false);
  const { petsData } = useSelector((state: StoreState) => state.pets);

  useEffect(() => {
    setLoadingInitial(true);
    dispatch(petsActions.fetchPets());
    setLoadingInitial(false);
  }, [dispatch]);

  return (
    <Fragment>
      <Grid columns={3} relaxed='very'>
        <Grid.Column>
          <AdopcionFilters />
        </Grid.Column>

        <AdopcionList petsData={petsData} loadingInitial={loadingInitial} />

        {/*Si se estan cargando mas eventos aparece esto abajo*/}
        {/* <Grid.Column width='10'>
        <Loader />
      </Grid.Column> */}
      </Grid>
    </Fragment>
  );
};
