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

// Style
import { ButtonWrapper } from "../common/globalStyle";

const Name = () => {
  const { name, setNameContext } = useContext(UserContext);
  const initialState = {
    name: name || ""
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
    <Container>
      <Header />
      <FormWrapper>
        <Card type="form" illustrationTypes={["picture"]}>
          <Formik
            initialValues={user}
            onSubmit={(values, actions) => handleSubmit({ values, actions })}
            validationSchema={userSchema}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                {errors.name && touched.name && (
                  <span className="form-error">{errors.name}</span>
                )}
                <h2>
                  Welkom bij de zoektocht naar de buurt die het beste bij je
                  past. Wat is je naam?
                </h2>
                <Field
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  type="text"
                  placeholder="Jonathan Jansen"
                />
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

export default Name;

const FormWrapper = styled.div`
  h2 {
    line-height: 45px;
  }
`;
