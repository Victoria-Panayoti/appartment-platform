import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormField, Form, ErrorMessage } from './AppartForm.styled';

const AppartSchema = Yup.object().shape({
  picture: Yup.string().required('Required field!'),
  country: Yup.string().required('Required field!'),
  city: Yup.string().required('Required field!'),
  description: Yup.string().required('Required field!'),
  price: Yup.number().positive('Must be positive').required('Required field!'),
});
export const AppartForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        picture: '',
        country: '',
        city: '',
        description: '',
        price: 0,
      }}
      validationSchema={AppartSchema}
      onSubmit={(values,actions) => {
          onSave({ ...values, id: nanoid() });
          actions.resetForm();
      }}

    >
      <Form>
        <FormField>
          Foto
          <Field name="picture" />
          <ErrorMessage name="picture" component="span" />
        </FormField>
        <FormField>
          Country
          <Field name="country" />
          <ErrorMessage name="country" component="span" />
        </FormField>
        <FormField>
          City
          <Field name="city" />
          <ErrorMessage name="city" component="span" />
        </FormField>
        <FormField>
          Description
          <Field name="description" />
          <ErrorMessage name="description" component="span" />
        </FormField>
        <FormField>
          Price
          <Field type="number" name="price" />
          <ErrorMessage name="price" component="span" />
        </FormField>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};
