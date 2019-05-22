import { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

const intialState = {
  name: "",
  email: "",
  password: ""
};

const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .max(13)
    .min(8)
});

const name = () => {
  const [user, setUser] = useState(intialState);
  return (
    <>
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => {
          console.log(actions);
          actions.setSubmitting(true);
          setUser(values);
          setTimeout(() => {
            actions.resetForm(initialState);
            actions.setSubmitting(false);
          }, 2000);
        }}
        validationSchema={userSchema}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <Field
              type="email"
              placeholder="Enter email"
              onChange={props.handleChange}
              name="email"
              value={props.values.email}
            />
            {props.errors.email && props.touched.email && (
              <span>{props.errors.email}</span>
            )}

            <Field
              type="password"
              onChange={props.handleChange}
              name="password"
              value={props.values.password}
              placeholder="Password"
            />
            {props.errors.password && props.touched.password && (
              <span>{props.errors.password}</span>
            )}

            <Field
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
              type="text"
              placeholder="Name"
            />
            {props.errors.name && props.touched.name && (
              <span>{props.errors.name}</span>
            )}

            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default name;
