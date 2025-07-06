import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer'; // ✅ Footer import

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer /> {/* ✅ Footer added here */}
      </>
    </Router>
  );
};

export default App;
