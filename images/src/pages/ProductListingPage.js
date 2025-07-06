import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const products = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 10,
      category: 'Low Light',
      image: '/images/plant1.jpg',
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 15,
      category: 'Bright Light',
      image: '/images/plant2.jpg',
    },
    {
      id: 3,
      name: 'Peace Lily',
      price: 12,
      category: 'Flowering',
      image: '/images/plant3.jpg',
    },
    {
      id: 4,
      name: 'Spider Plant',
      price: 9,
      category: 'Low Light',
      image: '/images/plant4.jpg',
    },
    {
      id: 5,
      name: 'ZZ Plant',
      price: 11,
      category: 'Bright Light',
      image: '/images/plant5.jpg',
    },
    {
      id: 6,
      name: 'Aloe Vera',
      price: 13,
      category: 'Succulent',
      image: '/images/plant6.jpg',
    },
  ];

  const groupedByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <div className="product-listing-container">
        <h2>Our Houseplants</h2>
        {Object.keys(groupedByCategory).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="product-grid">
              {groupedByCategory[category].map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <button
                    disabled={cartItems.find((item) => item.id === product.id)}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    {cartItems.find((item) => item.id === product.id)
                      ? 'Added'
                      : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListingPage;
