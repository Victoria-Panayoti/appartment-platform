import { useParams } from 'react-router-dom';

const AppartDetails = () => {
  const { appartId } = useParams();

  return <>AppartDetails:{appartId} </>;
};

export default AppartDetails;
