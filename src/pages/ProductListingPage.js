import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';
import './ProductListingPage.css';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, image: require('../assets/plant1.jpg') },
  { id: 2, name: 'Snake Plant', price: 15, image: require('../assets/plant2.jpg') },
  { id: 3, name: 'Peace Lily', price: 20, image: require('../assets/plant3.jpg') },
  { id: 4, name: 'Spider Plant', price: 12, image: require('../assets/plant4.jpg') },
  { id: 5, name: 'Money Plant', price: 18, image: require('../assets/plant5.jpg') },
  { id: 6, name: 'Fern', price: 14, image: require('../assets/plant6.jpg') },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="product-list-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs: {product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListingPage;
