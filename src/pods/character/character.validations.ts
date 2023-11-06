import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    location: [Validators.required],
    status: [Validators.required],
    species: [Validators.required],
    gender: [Validators.required],
    bestSentences: [Validators.required]
  },
};

export const formValidation = createFormikValidation(validationSchema);
