import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I love { name }!</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치 (Kimchi)',
    image: 'https://assets.nacionrex.com/__export/1539209755832/sites/debate/img/2018/10/10/whole-cabbage-kimchi_1.jpg_673822677.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살 (Samgyeopsal)',
    image: 'https://th.bing.com/th/id/OIP.cMZDnNn79IFhk7N9IaDNgwHaE8',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://cdn.shopify.com/s/files/1/0111/1729/7722/articles/dolsot-bibimbap-vegetable-main-1570px.jpg',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://th.bing.com/th/id/OIP.m2o0W-WA42ArcjeN-DNWygHaFj',
    rating: 3.1,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://th.bing.com/th/id/OIP.d1dFi6Q5rQnkJoWTx5zQCAHaFb',
    rating: 2.9,
  },
  {
    id: 6,
    name: 'Ramen',
    image: 'https://th.bing.com/th/id/OIP.TxWt3vPZOzQfrKAU4If5VQHaHa',
    rating: 5.0,
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}

function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div>
      <h1>Hello React World!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
