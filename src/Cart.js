import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const deliveryFee = 100; // Static delivery fee for demonstration purposes

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p> {item.price}</p>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-from-cart" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Delivery <span>₹ {deliveryFee}</span></p>
            <p>Subtotal for {cart.length} items <span>₹ {calculateSubtotal() + deliveryFee}</span></p>
            <div className="cart-buttons">
              <button className="view-bag">View Bag</button>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
