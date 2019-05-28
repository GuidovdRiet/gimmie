import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";

// Context
import { UserContext } from "../components/context/UserProvider";

const name = () => {
  const { name, setNameContext } = useContext(UserContext);
  const initialState = {
    name: name ? name : ""
  };
  const [user, setUser] = useState(initialState);

  const userSchema = yup.object().shape({
    name: yup.string().required()
  });

  const handleSubmit = ({ values, actions }) => {
    setNameContext(values.name);
    setUser(values);
    Router.push("/budget");
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => handleSubmit({ values, actions })}
        validationSchema={userSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              onChange={handleChange}
              value={values.name}
              type="text"
              placeholder="Name"
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
            <button type="submit">Volgende</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default name;
