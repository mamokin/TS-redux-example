import {withFormik, FormikErrors} from 'formik';
import {FormValues, InnerForm} from './LoginForm';

// The type of props LoginForm receives
interface LoginFormProps {
  initialname?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

const isValidName = (name: string) => {
  return name !== '';
};

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik<LoginFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      name: props.initialname || '',
      password: ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (!isValidName(values.name)) {
      errors.name = 'Invalid name';
    }

    return errors;
  },

  handleSubmit: (values) => {
    alert(values);
  }
})(InnerForm);

export default LoginForm;