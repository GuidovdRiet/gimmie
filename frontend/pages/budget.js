import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import styled from "styled-components";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";
import Button from "../components/buttons";
import { Container } from "../components/global/PageLayout";
import Card from "../components/cards";

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
      <Card type="form">
        <FormWrapper>
          <Formik
            initialValues={user}
            onSubmit={(values, actions) => handleSubmit({ values, actions })}
            validationSchema={userSchema}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                {errors.budget && touched.budget && (
                  <span>{errors.budget}</span>
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
                    className="button"
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
        </FormWrapper>
      </Card>
    </Container>
  );
};

export default Budget;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    background-color: transparent;
    /* height: 34px; */
    padding-top: 16px;
    border: 0;
    margin-left: 10px;
    &::placeholder {
      font-family: ${({ theme }) => theme.secondaryFont};
      line-height: 10px;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.purple};
      opacity: 0.4;
    }
    &:focus {
      outline: 0;
    }
  }
`;

const FormWrapper = styled.div`
  h2 {
    margin: 10px 0;
    line-height: 30px;
  }
  .button {
    width: 170px;
    height: 60px;
  }
`;

const ButtonWrapper = styled.div`
  .button {
    width: 160px;
    height: 60px;
    font-size: 1.7rem;
    &:first-child {
      margin-right: 35px;
    }
  }
`;
