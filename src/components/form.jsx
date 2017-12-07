// @flow

import * as React from "react";
import { withFormik } from 'formik';
import yup from 'yup';

type Props = {}

const Form = (props: Props) => {
  return(
    <div>form</div>
  );
}

export default (withFormik({
  mapPropsToValues: () => ({}),
  validationSchema: () => undefined,
  handleSubmit: () => undefined,
  displayName: 'mock'
})(Form));
