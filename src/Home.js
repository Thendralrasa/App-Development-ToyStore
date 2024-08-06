import React from 'react';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="main-content">
      <div className="banner">
        <img src="https://images.pexels.com/photos/1620675/pexels-photo-1620675.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-1620675.jpg&fm=jpg" alt="TOYTOPIA" />
        <div className="banner-content">
          <h1>TOY<span>TOPIA</span></h1>
          <p>Additional 5% off: CODE TOYTO5</p>
          <p>Additional 10% off: CODE TOYTO10</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
