import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <h1><Link to="/" className="logo">Paradise Nursery</Link></h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}

export default Header;
