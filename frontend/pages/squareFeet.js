import { useState, useContext } from 'react';
import { Formik, Field } from 'formik';
import Router from 'next/router';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';
import * as yup from 'yup';

// Components
import Header from '../components/global/Header';
import { Container } from '../components/global/PageLayout';
import Card from '../components/cards';
import Button from '../components/buttons';

// Context
import { UserContext } from '../components/context/UserProvider';

// Style
import { ButtonWrapper } from '../common/globalStyle';

const SquareFeet = () => {
  const { squareFeet, setSquareFeetContext } = useContext(UserContext);
  const initialState = {
    squareFeet: squareFeet || ''
  };
  const [user, setUser] = useState(initialState);

  const userSchema = yup.object().shape({
    squareFeet: yup.string().required()
  });

  const handleSubmit = ({ values, actions }) => {
    setSquareFeetContext(values.squareFeet);
    setUser(values);
    Router.push('/result');
  };

  return (
    <>
      <Header linkBack="budget" showLinkBack />
      <Container>
        <BodyClassName className="area-svg" />
        <FormWrapper>
          <Card type="form" illustrationTypes={['housePeople', 'treeSwing']}>
            <Formik
              initialValues={user}
              onSubmit={(values, actions) => handleSubmit({ values, actions })}
              validationSchema={userSchema}
            >
              {({
 handleSubmit, handleChange, values, errors, touched 
}) => (
                <form onSubmit={handleSubmit}>
                  {errors.squareFeet && touched.squareFeet && (
                    <span className="form-error">{errors.squareFeet}</span>
                  )}
                  <TopWrapper>
                    <h2>
                      De oppervlakte van mijn huis moet minimaal
                      <Field
                        name="squareFeet"
                        onChange={handleChange}
                        value={values.squareFeet}
                        type="number"
                        placeholder="m2"
                        autoFocus
                      />
                      zijn.
                    </h2>
                  </TopWrapper>
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
    </>
  );
};

export default SquareFeet;

const TopWrapper = styled.div`
  display: inline;
`;

const FormWrapper = styled.div`
  h2 {
    line-height: 45px;
  }
  input {
    margin: 0 5px 0 8px;
    max-width: 53px;
  }
`;
