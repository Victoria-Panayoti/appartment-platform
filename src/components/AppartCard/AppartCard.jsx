import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdStarHalf } from 'react-icons/io';
import { AppartImage, AppartThumb, DescribeThumb } from './AppartCard.styled';

export const AppartCard = ({ appart:{id,picture,country,city,description,rating,price} }) => {
  const [selectedImg, setSelectedImg] = useState(null)
  const hoverSelectedImg = () => {
    setSelectedImg(id)
    
  };
  const leaveHoverSelectedImg = () => {
    setSelectedImg(null)
  };
  return (<AppartThumb
        key={id}
        onMouseOver={hoverSelectedImg}
        onMouseLeave={leaveHoverSelectedImg}
      >
        <AppartImage
          src={require(`../../pictures/${picture}.jpg`)}
          alt={description}
        />
        {selectedImg && (
          <DescribeThumb>
            <p>{description}</p>
            <p>
              <IoMdStarHalf />
              {rating}
            </p>
            <p> UAH {price} per night</p>
          </DescribeThumb>
        )}
      </AppartThumb>)
}

AppartCard.propTypes = {
  appart: PropTypes.shape({
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
