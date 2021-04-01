import React from 'react';
import { Placeholder, Card, PlaceholderParagraph } from 'semantic-ui-react';

export const AdopcionLoader = (): JSX.Element => {
  return (
    <Placeholder fluid>
      <Card.Group itemsPerRow={2} doubling stackable>
        <Card>
          <Placeholder>
            <Placeholder.Image />
            <Card.Content textAlign='center'>
              <Card.Header>
                <Placeholder.Line />
              </Card.Header>
              <Card.Meta>
                <Placeholder.Line />
              </Card.Meta>
              <Card.Description>
                <PlaceholderParagraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </PlaceholderParagraph>
              </Card.Description>
            </Card.Content>
          </Placeholder>
        </Card>

        <Card>
          <Placeholder>
            <Placeholder.Image />
            <Card.Content textAlign='center'>
              <Card.Header>
                <Placeholder.Line />
              </Card.Header>
              <Card.Meta>
                <Placeholder.Line />
              </Card.Meta>
              <Card.Description>
                <PlaceholderParagraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </PlaceholderParagraph>
              </Card.Description>
            </Card.Content>
          </Placeholder>
        </Card>
      </Card.Group>
    </Placeholder>
  );
};
