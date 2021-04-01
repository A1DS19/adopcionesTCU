import React from 'react';
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';

interface Props {
  selectedPet: PetsData | undefined;
  authenticated: boolean;
}

export const AdopcionDetailComments: React.FC<Props> = ({
  selectedPet,
  authenticated,
}) => {
  return (
    <Segment style={{ marginTop: '25px' }}>
      <Comment.Group>
        <Header as='h3' dividing>
          Comentarios acerca de {selectedPet?.name}
        </Header>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        {authenticated ? (
          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' color='orange' />
          </Form>
        ) : (
          <Header color='orange' sub content='Debe iniciar sesion para comentar' />
        )}
      </Comment.Group>
    </Segment>
  );
};
