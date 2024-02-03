import { Link } from 'react-router-dom';
import initialApparts from '../upcoming-appart.json';
import { AppartContainer } from '../components/AppartBoard/AppartContainer.styled';
import { AppartCard } from '../components/AppartCard/AppartCard';
const Appartments = () => {
  const getApparts = () => {
    return initialApparts;
  };
  const apparts = getApparts();
  return (
    <AppartContainer>
      {apparts.map(appart => (
        <Link key={appart.id} to={`${appart.id}`}>
          {<AppartCard appart={appart} />}
        </Link>
      ))}
    </AppartContainer>
  );
};

export default Appartments;
