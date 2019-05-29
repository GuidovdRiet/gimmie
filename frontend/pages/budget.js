import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";
import { Container } from "../components/global/PageLayout";

// Context
import { UserContext } from "../components/context/UserProvider";

const budget = () => {
  const { budget, setBudgetContext } = useContext(UserContext);
  const initialState = {
    budget: budget ? budget : ""
  };
  const [user, setUser] = useState(initialState);

  const userSchema = yup.object().shape({
    budget: yup.string().required()
  });

  const handleSubmit = ({ values, actions }) => {
    setBudgetContext(values.budget);
    setUser(values);
    Router.push("/squarefeet");
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
              name="budget"
              onChange={handleChange}
              value={values.budget}
              type="number"
              placeholder="budget"
            />
            {errors.budget && touched.budget && <span>{errors.budget}</span>}
            <button type="submit">Volgende</button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default budget;
