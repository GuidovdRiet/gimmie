import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import styled from "styled-components";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";
import { Container } from "../components/global/PageLayout";
import Card from "../components/cards";
import Button from "../components/buttons";

// Context
import { UserContext } from "../components/context/UserProvider";

const Budget = () => {
  const { budget, setBudgetContext } = useContext(UserContext);
  const initialState = {
    budget: budget || ""
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
      <Card type="form" illustrationTypes={["school", "treeHouse"]}>
        <Formik
          initialValues={user}
          onSubmit={(values, actions) => handleSubmit({ values, actions })}
          validationSchema={userSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              {errors.budget && touched.budget && (
                <span className="form-error">{errors.budget}</span>
              )}
              <TopWrapper>
                <h2>Ik wil maximaal &euro;</h2>
                <Field
                  name="budget"
                  onChange={handleChange}
                  value={values.budget}
                  type="number"
                  placeholder="0,00"
                />
              </TopWrapper>
              <h2>Uitgeven aan mijn nieuwe woning.</h2>
              <ButtonWrapper>
                <Button
                  type="submit"
                  __type="square"
                  className="button cross"
                  iconType="cross"
                  secondary
                  text="Skip"
                />
                <Button
                  type="submit"
                  __type="square"
                  className="button"
                  iconType="arrow"
                  text="Volgende"
                />
              </ButtonWrapper>
            </form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default Budget;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 62px;
  .button {
    width: 160px;
    height: 60px;
    font-size: 1.6rem;
    &:first-child {
      margin-right: 35px;
    }
  }
`;
