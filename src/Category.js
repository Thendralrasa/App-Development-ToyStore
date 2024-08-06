import React from 'react';
import Footer from './Footer';
import './Category.css';

const Category = () => {
  return (
    <div>
    <div className="category">
      <div className="category-section">
        <h3>Toys & Games</h3>
        <ul>
          <li><a href="/action-games">Action Games & Toys</a></li>
          <li><a href="/activity-kits">Activity Kits & Toys</a></li>
          <li><a href="/construction-toys">Construction & Building Toys</a></li>
          <li><a href="/more-toys">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Sports & Outdoor</h3>
        <ul>
          <li><a href="/outdoor-sports">Outdoor Sports</a></li>
          <li><a href="/indoor-sports">Indoor Sports</a></li>
          <li><a href="/outdoor-leisure">Outdoor Leisure</a></li>
          <li><a href="/more-sports">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Ride-Ons & Cycles</h3>
        <ul>
          <li><a href="/ride-ons">Ride-Ons</a></li>
          <li><a href="/scooters">Scooters</a></li>
          <li><a href="/cycles">Cycles & Tricycles</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Baby Gear & Utility</h3>
        <ul>
          <li><a href="/baby-gear">Baby Gear</a></li>
          <li><a href="/baby-utility">Baby Utility</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>School & Travel</h3>
        <ul>
          <li><a href="/travel">Travel</a></li>
          <li><a href="/school-supplies">School Supplies</a></li>
          <li><a href="/stationery">Stationery</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Fashion & Accessories</h3>
        <ul>
          <li><a href="/boys-clothing">Boys Clothing</a></li>
          <li><a href="/girls-clothing">Girls Clothing</a></li>
          <li><a href="/infant-clothing">Infant Clothing</a></li>
          <li><a href="/more-fashion">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Gadgets</h3>
        <ul>
          <li><a href="/audio">Audio</a></li>
          <li><a href="/security">Security</a></li>
          <li><a href="/cameras">Cameras</a></li>
          <li><a href="/more-gadgets">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Books</h3>
        <ul>
          <li><a href="/baby-books">Baby & Toddler Books</a></li>
          <li><a href="/young-readers">Young Readers Books</a></li>
          <li><a href="/education-books">Learning & Education Books</a></li>
          <li><a href="/more-books">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Party & Gifts</h3>
        <ul>
          <li><a href="/party-supplies">Party Supplies</a></li>
          <li><a href="/gift-sets">Gift Sets</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Hygiene & Personal Care</h3>
        <ul>
          <li><a href="/baby-care">Baby & Personal Care</a></li>
          <li><a href="/bath-accessories">Bath Accessories</a></li>
          <li><a href="/health">Health</a></li>
          <li><a href="/more-hygiene">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Furnishing & Decor</h3>
        <ul>
          <li><a href="/nursery">Nursery</a></li>
          <li><a href="/room-furnishing">Room Furnishing</a></li>
          <li><a href="/wall-decor">Wall Decor</a></li>
          <li><a href="/more-furnishing">See more</a></li>
        </ul>
      </div>
      <div className="category-section">
        <h3>Pet Care</h3>
        <ul>
          <li><a href="/walk-essentials">Walk Essentials</a></li>
          <li><a href="/pet-toys">Pet Toys</a></li>
          <li><a href="/pet-clothing">Pet Clothing</a></li>
        </ul>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Category;
