import { withRouter } from 'next/router';
import { array } from 'prop-types';
import fetch from 'isomorphic-unfetch';

// Components
import Header from '../components/global/Header';
import Card from '../components/cards';
import { Container } from '../components/global/PageLayout';
import InputWrapper from '../components/layout/InputWrapper';

const Neighbourhood = ({ dataArray }) => {
  const [data] = dataArray;
  return (
    <>
      <Header linkBack="/result" showLinkBack />
      <Container>
        {/* Set className for different background image */}
        {/* <BodyClassName className="area-svg" /> */}
      </Container>
    </>
  );
};

Neighbourhood.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `http://localhost:7777/neighbourhoods/single?neighbourhood=${
      query.neighbourhood
    }`
  );
  const dataArray = await res.json();

  return {
    dataArray
  };
};

Neighbourhood.propTypes = {
  dataArray: array.isRequired
};

export default withRouter(Neighbourhood);
