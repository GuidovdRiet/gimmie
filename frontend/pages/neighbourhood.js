import { withRouter } from 'next/router';

const neighbourhood = ({ router: { query } }) => <div>{query.title}</div>;

export default withRouter(neighbourhood);
