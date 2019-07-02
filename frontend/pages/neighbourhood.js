import { withRouter } from 'next/router';
import { object } from 'prop-types';

// Components
import Header from '../components/global/Header';
import Card from '../components/cards';
import { Container } from '../components/global/PageLayout';
import InputWrapper from '../components/layout/InputWrapper';

const Neighbourhood = ({ router: { query } }) => (
  // <div>{query.neighbourhood}</div>
  <>
    <Header linkBack="/result" showLinkBack />
    <Container>
      {/* Set className for different background image */}
      {/* <BodyClassName className="area-svg" /> */}
    </Container>
  </>
);

Neighbourhood.propTypes = {
  router: object.isRequired
};

export default withRouter(Neighbourhood);
