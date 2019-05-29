import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";
import { Container } from "../components/global/PageLayout";
import Card from "../components/cards";

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
      <Card type="form">
        <Formik
          initialValues={user}
          onSubmit={(values, actions) => handleSubmit({ values, actions })}
          validationSchema={userSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <h2>Ik wil maximaal</h2>
              <Field
                name="budget"
                onChange={handleChange}
                value={values.budget}
                type="number"
                placeholder="budget"
              />
              <h2>Uitgeven aan mijn nieuwe woning.</h2>
              {errors.budget && touched.budget && <span>{errors.budget}</span>}
              <button type="submit">Volgende</button>
            </form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default budget;
