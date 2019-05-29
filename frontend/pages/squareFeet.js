import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";
import { Container } from "../components/global/PageLayout";

// Context
import { UserContext } from "../components/context/UserProvider";

const squareFeet = () => {
  const { squareFeet, setSquareFeetContext } = useContext(UserContext);
  const initialState = {
    squareFeet: squareFeet ? squareFeet : ""
  };
  const [user, setUser] = useState(initialState);

  const userSchema = yup.object().shape({
    squareFeet: yup.string().required()
  });

  const handleSubmit = ({ values, actions }) => {
    setSquareFeetContext(values.squareFeet);
    setUser(values);
    Router.push("/result");
  };

  return (
    <Container>
      <Header />
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => handleSubmit({ values, actions })}
        validationSchema={userSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="squareFeet"
              onChange={handleChange}
              value={values.squareFeet}
              type="number"
              placeholder="squareFeet"
            />
            {errors.squareFeet && touched.squareFeet && (
              <span>{errors.squareFeet}</span>
            )}
            <button type="submit">Volgende</button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default squareFeet;
