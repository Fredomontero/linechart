import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const ItemDetail = ({ match }) => {

  const [ item, setItem ] = useState(null);

  const fetchItem =  async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
    const item = await response.json();
    setItem(item);
    console.log(item.sprites.front_default);
  }

  useEffect(() => {
    fetchItem();
  }, [])

  return(
    (item !== null) ? (
      <div className="container">
        <h1>Name: {item.name}</h1>
        <img src={`${item.sprites.front_default}`} alt={`${item.name}`}/>
        <h3>Height: {item.height}</h3>
        <h3>Weight: {item.weight}</h3>
    </div>
    ) : (<h1>Loading...</h1>)
  )
};