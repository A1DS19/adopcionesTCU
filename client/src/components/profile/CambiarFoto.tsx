import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { AuthPayload, updateUserPFP } from '../../actions/auth';
import { PhotoDropzone } from '../common/photos/PhotoDropzone';

interface Props {
  currentUser: AuthPayload | null;
}

export const PhotoUpload: React.FC<Props> = ({ currentUser }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const ifPreview = () => {
    if (!files || !files.length) {
      return false;
    } else {
      return true;
    }
  };

  const renderPreview = () => {
    return files.map((file: File) => (
      <Image key={file.name} style={{ marginTop: '10px' }} src={file.preview} />
    ));
  };

  const handlePhotoSubmit = () => {
    try {
      setLoading(true);
      dispatch(
        updateUserPFP(currentUser?.id?.toString()!, files, () => {
          history.go(0);
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header textAlign='center' content='Cambiar Foto de Perfil' />
      <Grid divided style={{ marginTop: '10px' }}>
        <Grid.Column width={8}>
          <Header textAlign='center' color='orange' sub content='agregar una foto' />
          <PhotoDropzone setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header
            textAlign='center'
            sub
            color='orange'
            content={!ifPreview() ? 'foto actual' : 'vista previa'}
          />
          {ifPreview() ? (
            renderPreview()
          ) : (
            <Image
              style={{ marginTop: '10px' }}
              src={currentUser?.photoURL || '/assets/user.png'}
            />
          )}
        </Grid.Column>
        {ifPreview() && (
          <Button
            loading={loading}
            disabled={loading}
            style={{ marginTop: '10px' }}
            onClick={handlePhotoSubmit}
            fluid
            color='orange'
            content='ACTUALIZAR FOTO'
          />
        )}
      </Grid>
    </Fragment>
  );
};
