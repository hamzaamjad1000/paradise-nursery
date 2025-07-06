import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery – your destination for beautiful houseplants!</p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;

