import React, { Fragment } from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { AdopcionDetailMessage } from './AdopcionDetailMessage';

interface Props {
  selectedPet: PetsData | undefined;
}

export const AdopcionDetailContact: React.FC<Props> = ({ selectedPet }) => {
  return (
    <Fragment>
      <Segment>
        <Item.Group>
          <Item>
            <img
              style={{
                borderRadius: '50%',
                width: '120px',
                height: '120px',
                marginRight: '30px',
              }}
              src={selectedPet?.photosUrl[0]}
              alt='petPic'
            />
            <Item.Content style={{ marginTop: '20px' }}>
              <Item.Header content={`Pregunta acerca de ${selectedPet?.name}`} />
              <Item.Description>
                {selectedPet?.breed}
                <br />
                {selectedPet?.description}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <AdopcionDetailMessage selectedPet={selectedPet} />
    </Fragment>
  );
};
