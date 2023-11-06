import React from 'react';
import { Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled={true} />
          <TextFieldComponent name="location" label="Location" disabled={true} />
          <TextFieldComponent name="status" label="Status" disabled={true} />
          <TextFieldComponent name="species" label="Species" disabled={true} />
          <TextFieldComponent name="gender" label="Gender" disabled={true} />
          <TextFieldComponent name="bestSentences" label="Best Sentences" />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
