import React from 'react'
import { useSelector } from 'react-redux'
const carItem = ({ id, name, description, picture, price }) => {
  return (
    <section>
      <img src={picture} alt="Image not loaded" />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <button>Remove</button>
    </section>
  )
}

export default carItem;