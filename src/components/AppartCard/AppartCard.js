import PropTypes from 'prop-types'

export default function AppartCard({ id, picture, description, rating, price }) {
    
    return (<div key={id}>
      <img src={require(`../../pictures/${picture}.jpg`)} alt={description} style={{width:"350px",display:"block"}} />
      <p>{ description}</p>
      <p>{rating}</p>
      <p> UAH { price} per Night</p>
  </div>)
}

AppartCard.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
  price:PropTypes.number.isRequired
}