import React from 'react';
import { Label } from 'semantic-ui-react';

export const ErrorLabel: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return <Label basic style={{ marginBottom: 10 }} color='red' content={errorMessage} />;
};
