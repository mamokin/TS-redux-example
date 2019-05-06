import React from 'react';
import {FormikProps, Form, Field} from 'formik';
import {TextField} from 'formik-material-ui';

// Shape of form values
export interface FormValues {
  name: string;
  password: string;
}

interface OtherProps {
  message: string;
}

export const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {touched, errors, isSubmitting, message} = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type='name' name='name' component={ TextField } />
      {touched.name && errors.name && <>{errors.name}</>}

      <Field type='password' name='password' component={ TextField } />
      {touched.password && errors.password && <>{errors.password}</>}

      <button type='submit' disabled={ isSubmitting }>
        Submit
      </button>
    </Form>
  );
};