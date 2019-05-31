import { useState, useContext } from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import styled from "styled-components";
import BodyClassName from "react-body-classname";
import * as yup from "yup";

// Components
import Header from "../components/global/Header";
import { Container } from "../components/global/PageLayout";
import Card from "../components/cards";
import Button from "../components/buttons";

// Context
import { UserContext } from "../components/context/UserProvider";

// Style
import { ButtonWrapper } from "../common/globalStyle";

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
      <BodyClassName className="area-svg" />
      <FormWrapper>
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
                    autoFocus
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
      </FormWrapper>
    </Container>
  );
};

export default Budget;

const FormWrapper = styled.div`
  h2 {
    line-height: 30px;
  }
  input {
    margin-left: 7px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;
