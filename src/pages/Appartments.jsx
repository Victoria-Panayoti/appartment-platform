import { Link, useLocation, useSearchParams } from 'react-router-dom';
import initialApparts from '../upcoming-appart.json';
import { AppartContainer } from '../components/AppartBoard/AppartContainer.styled';
import { AppartCard } from '../components/AppartCard/AppartCard';
import { useState } from 'react';

const Appartments = () => {

  const[apparts]=useState(initialApparts)
  const [searchParams, setSearchParams] = useSearchParams();
  const country = searchParams.get('country')??'';
  const visibleApparts = apparts.filter(appart => appart.country.includes(country))
  const updateQueryString = evt => {
    if (evt.target.value === '') {
       return setSearchParams({})
    }
    setSearchParams({ country: evt.target.value })
  }
  const location = useLocation();
  
  return (
    <>
      <input
        placeholder="Country"
        value={country}
        onChange={updateQueryString}
      />
      <select placeholder="City" />
      <AppartContainer>
        {visibleApparts.map(appart => (
          <Link key={appart.id} to={`${appart.id}`} state={{from:location}} >
            {<AppartCard appart={appart}  />}
          </Link>
        ))}
      </AppartContainer>
    </>
  );
};

export default Appartments;
