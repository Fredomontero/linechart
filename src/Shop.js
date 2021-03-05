import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Shop = () => {

  const [ items, setItems ] = useState([]);

  const fetchItems =  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10');
    const data = await response.json();
    const items = data.results;
    setItems(items);
    console.log(items);
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return(
    <div className="container">
      <h1>Shop Page</h1>
      <div>
        {
          items.map(item => <Link key={item.name} to={`/shop/${item.name}`} ><h2>{item.name}</h2></Link> )
        }
      </div>
    </div>
  )
};