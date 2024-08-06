import React from 'react';
import Footer from './Footer';
import './DealsAndPromotions.css';

const DealsAndPromotions = () => {
  return (
    <div>
    <div className="deals-container">
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17133494811694428526.webp" alt="Deals" />
        <p>Limited Period deals</p>
      </div>
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17133499471694428528.webp" alt="Promotions" />
        <p>Promotions</p>
      </div>
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1713340659Deals_and_Promotions_(1).webp" alt="Back to School" />
        <p>Back to School</p>
      </div>
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1720180560Navigation_Icon_(1).webp" alt="Monsoon Toyland" />
        <p>Monsoon Toyland</p>
      </div>
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17133502191694428519.webp" alt="Under 500" />
        <p>Under 500</p>
      </div>
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1713350400Under_1000.webp" alt="Under 1000" />
        <p>Under 1000</p>
      </div>
      <div className="deal-item">
        <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1713350653Under_1500.webp" alt="Under 1500" />
        <p>Under 1500</p>
       
      </div>
    
      
    </div>
    <Footer/>
    </div>
  );
}

export default DealsAndPromotions;
