import React from 'react';
import {FormikProps, Form, Field} from 'formik';
// import {Input} from 'semantic-ui-react';
// TODO: Change form over to semantic-ui and manage state manually.
// https://react.semantic-ui.com/collections/form/
// https://react.semantic-ui.com/elements/input/#types-input
// TS form state: https://github.com/joshtynjala/semantic-ui-react-typescript-examples/blob/master/todos/src/App.tsx

export const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {touched, errors, isSubmitting, message} = props;

  return (
    <main className='main'>
      <Form className='form'>
        {message}
        <Field id='name' type='name' name='name'className='fld width--f'/>
        {touched.name && errors.name && <>{errors.name}</>}

        <Field id='password' type='password' name='password' className='fld width--f'/>
        {touched.password && errors.password && <>{errors.password}</>}

        <button type='submit' disabled={ isSubmitting } className='btn submit width--f' color='primary'>
          Submit
        </button>
      </Form>
    </main>
  );
};

// Shape of form values
export interface FormValues {
  name: string;
  password: string;
}

interface OtherProps {
  message: string;
}
