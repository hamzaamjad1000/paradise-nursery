import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart } from '../redux/cartSlice';
import Header from '../components/Header';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty 🛒</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>Price: Rs. {item.price}</p>
                    <div className="cart-actions">
                      <button onClick={() => dispatch(decrementQty(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: Rs. {totalAmount}</h3>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
