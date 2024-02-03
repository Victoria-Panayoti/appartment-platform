import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppartContainer } from './AppartContainer.styled';
import { AppartCard } from 'components/AppartCard/AppartCard';
import initialApparts from '../upcoming-appart.json';

const getInitialApparts = () => {
  const savedApparts = localStorage.getItem('apparts');
  if (savedApparts !== null) {
    return JSON.parse(savedApparts);
  } else {
    return initialApparts;
  }
};

const AppartBoard = () => {
  const [apparts] = useState(getInitialApparts);
  useEffect(() => {
    localStorage.setItem('apparts', JSON.stringify(apparts));
  }, [apparts]);
  return (
    <AppartContainer>
      {apparts.map(appart => (     
          <AppartCard appart={appart} />      
      ))}
    </AppartContainer>
  );
}

AppartBoard.propTypes = {
  apparts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};

export default AppartBoard;
