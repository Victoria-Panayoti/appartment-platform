import PropTypes from 'prop-types';
import AppartCard from 'components/AppartCard/AppartCard';

import { AppartContainer } from './AppartContainer.styled';

export default function AppartBoard({ apparts }) {
  return (
    <AppartContainer >
      {apparts.map(({ id, picture, description, rating, price }) => (
        <AppartCard
          key={id}
          picture={picture}
          description={description}
          rating={rating}
          price={price}
        />
      ))}
    </AppartContainer>
  );
}

AppartBoard.propTypes = {
  apparts: PropTypes.arrayOf(
    PropTypes.object)
};
