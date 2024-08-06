import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import DealsAndPromotions from './DealsAndPromotions';
import Category from './Category';
import Tracking from './Tracking';
import ToysShoppingPage from './ToysShoppingPage';
import Cart from './Cart';

import './App.css';
import Register from './Register';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (toy) => {
    setCart([...cart, toy]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  return (
    <Router>
      <header className="header">
        <img src="https://content.pancake.vn/1/s600x600/fwebp/51/49/5e/ea/ece26d79ce443e23b093476a5d3f31c765d5d931957166526d01c064.png" alt="Hamleys" className="logo" />
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/deals-and-promotions">Deals & Promotions</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul>
        </nav>
        <div className="actions">
          <Link to="/tracking">Track Order</Link>
          <Link to="/login">Login</Link>
          <Link to="/toysshoppingpage">Shop</Link>
          <Link to="/cart">My Bag</Link>
        </div>
      </header>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/deals-and-promotions" element={<DealsAndPromotions/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/tracking" element={<Tracking/>} />
        <Route path="/toysshoppingpage" element={<ToysShoppingPage addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
      </Routes>
    </Router>
  );
}

export default App;
