import React from 'react';


const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'pink',
            padding: '20px 0',
            display: 'flex',
            bottom: '0px',
            justifyContent: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '90%'
            }}>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>All Categories</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['Grocery', 'Electronics', 'Fashion', 'Home & Kitchen', 'Premium Fruits', 'Books', 'Furniture'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'grey' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Popular Categories</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['Staples', 'Beverages', 'Personal Care', 'Home Care', 'Fruits & Vegetables', 'Baby Care', 'Snacks & Branded Foods', 'Dairy & Bakery'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'grey' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Customer Account</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['My Account', 'My Orders', 'Wishlist', 'Payment Methods', 'Delivery Addresses', 'Wallet'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'grey' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Help & Support</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['About Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy', 'E-waste Policy', 'Cancellation & Return Policy', 'Shipping & Delivery Policy', 'AC Installation by resQ'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'grey' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Contact Us</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'grey' }}>
                        <li style={{ marginBottom: '5px', color: 'grey' }}>
                            Follow us on:
                            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src="https://images.hindustantimes.com/tech/img/2023/09/21/960x540/fb_1695273515215_1695273522698.jpg" alt="Facebook" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/415/original/instagram-logo-instagram-icon-transparent-free-png.png" alt="Instagram" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src="https://i.pngimg.me/thumb/f/720/compngwingbbtjg.jpg" alt="Twitter" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src="https://i.pinimg.com/736x/98/ae/15/98ae159aa1bb8b4243fbe1f9e27d1b9f.jpg" alt="YouTube" style={{ width: '30px' }} />
                                </a>
                            </div>
                        </li>
                        <li style={{ marginBottom: '5px', color: 'grey' }}>Call us: <a href="tel:18008901222" style={{ color: 'grey', textDecoration: 'none' }}>1800 890 1222</a></li>
                        <li style={{ marginBottom: '5px', color: 'grey' }}>8:00 AM to 8:00 PM, 365 days</li>
                        <li style={{ marginBottom: '5px', color: 'grey' }}>For issues, email us at <a href="mailto:toytopia@gmail.com" style={{ color: 'grey', textDecoration: 'none' }}>toytopia@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;