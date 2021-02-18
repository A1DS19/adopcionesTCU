import React from 'react';
import { Grid } from 'semantic-ui-react';
import { ProfileContent } from './ProfileContent';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../reducers';
import { RouteComponentProps } from 'react-router-dom';
import { AuthPayload } from '../../actions/auth';

export interface MatchParams {
  id: string;
}

export interface UserDataProps {
  user: AuthPayload | null;
}

interface Props extends RouteComponentProps<MatchParams> {}

export const ProfilePage = ({ match }: Props): JSX.Element => {
  const userId = match.params.id;
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: StoreState) => state.loading);
  const { currentUser } = useSelector((state: StoreState) => state.auth);

  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileContent currentUser={currentUser} />
      </Grid.Column>
    </Grid>
  );
};
