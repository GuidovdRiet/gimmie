import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

// Context
import UserProvider, { UserContext } from "../components/context/UserProvider";

const name = () => {
  const initialState = {
    name: ""
  };
  const [user, setUser] = useState(initialState);
  const { setUsernameContext } = useContext(UserContext);

  const userSchema = yup.object().shape({
    name: yup.string().required()
  });

  const handleSubmit = ({ values, actions }) => {
    actions.setSubmitting(true);
    setUsernameContext(values.name);
    setUser(values);

    setTimeout(() => {
      actions.resetForm(initialState);
      actions.setSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => handleSubmit({ values, actions })}
        validationSchema={userSchema}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
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
              Volgende
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default name;
