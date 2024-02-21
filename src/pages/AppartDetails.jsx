import { useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import initialApparts from '../upcoming-appart.json';

const AppartDetails = () => {
  const { appartId } = useParams();
  
  const getAppartById=(appartId) => {
     return initialApparts.find(appart => appart.id === appartId) 
  }
  const appart = getAppartById(appartId);
  const location = useLocation();
  const locationRef=useRef(location.state?.from ?? '/appartments')

  return <>
    <Link to={locationRef.current}>Back to Appartments</Link>
    <img src={require(`../pictures/${appart.picture}.jpg`)} alt={appart.description} />
     <p>{appart.description}</p>
  </>;
   
    
};

export default AppartDetails;
