import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>🌿 Paradise Nursery</h1>
      <nav>
        <Link to="/products" className="nav-link">Shop</Link>
        <Link to="/cart" className="nav-link">
          Cart 🛒 <span className="cart-count">{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
