import React from 'react'
const CarItem = ({ id, name, description, picture, price }) => {
  return (
    <section>
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <button>Remove</button>
    </section>
  )
};

CarItem.propTypes = myPropTypes;
export default CarItem;