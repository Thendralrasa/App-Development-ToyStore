import React from 'react';

import Footer from './Footer';
import './ToysShoppingPage.css';

const toyCategories = ['Action Figures', 'Dolls', 'Building Sets', 'Outdoor Play', 'Educational Toys', 'Vehicles', 'Games & Puzzles'];

const toys = [
    { id: 1, name: 'Toy Car', price: '$10', image: 'https://m.media-amazon.com/images/I/61uyG5VXqRL.AC_UF1000,1000_QL80.jpg' },
    { id: 2, name: 'Action Figure', price: '$15', image: 'https://i.ebayimg.com/images/g/WDAAAOSwBORjbcuu/s-l1200.jpg' },
    { id: 3, name: 'Building Set', price: '$25', image: 'https://m.media-amazon.com/images/I/81fns8htceL.AC_UF1000,1000_QL80.jpg' },
    { id: 4, name: 'Doll', price: '$20', image: 'https://cdn.pixabay.com/photo/2010/12/13/10/20/doll-2679_640.jpg' },
    { id: 5, name: 'Teddy', price: '$27', image: 'https://thumbs.dreamstime.com/b/romantic-teddy-bears-2445682.jpg' },
    { id: 6, name: 'Doraemon', price: '$30', image: 'https://sc04.alicdn.com/kf/H7110097619274760914f4e820b553b43T.jpg' },
    { id: 7, name: 'Anime', price: '$50', image: 'https://m.media-amazon.com/images/I/41ZBkxPubXL.AC_UF1000,1000_QL80.jpg' },
    { id: 8, name: 'Kitchen Set', price: '$62', image: 'https://images-cdn.ubuy.co.in/633acb1bdccf531fb248ee76-42-items-87-pcs-cutting-play-food-toy.jpg' },
    { id: 9, name: 'Doll House', price: '$60', image: 'https://m.media-amazon.com/images/I/519UK2VQuSL.AC_UF1000,1000_QL80.jpg' },
    { id: 10, name: 'Board Games', price: '$42', image: 'https://cdn.thewirecutter.com/wp-content/media/2021/07/board-games-we-love-scythe-2048px-1010547.jpg' },
    { id: 11, name: 'Jeep', price: '$40', image: 'https://m.media-amazon.com/images/I/71BdpZuW8bL.AC_UF1000,1000_QL80.jpg' },
    { id: 12, name: 'Helicopter', price: '$70', image: 'https://m.media-amazon.com/images/I/614g0gL-h2L.AC_UF894,1000_QL80.jpg' },
    { id: 13, name: 'Barbie', price: '$54', image: 'https://as1.ftcdn.net/v2/jpg/05/30/05/36/1000_F_530053693_DfyY8s76AvMNNtPcyIkxfeSqUMonrMvl.jpg' },
    { id: 14, name: 'Ball', price: '$20', image: 'https://m.media-amazon.com/images/I/71GKAq2xJ3L.AC_UF1000,1000_QL80.jpg' },
    { id: 15, name: 'Baby Toys', price: '$55', image: 'https://st.depositphotos.com/3123063/4231/i/450/depositphotos_42311899-stock-illustration-baby-toys-collection-isolated-on.jpg' },
];

const ToysShoppingPage = ({addToCart}) => {
    return (
        <div>
            <div className="toys-container">
                <h1 className="toys-title">Toys Shopping</h1>
                <div className="toy-categories">
                    {toyCategories.map((category, index) => (
                        <button key={index} className="category-button">{category}</button>
                    ))}
                </div>
                <div className="toy-grid">
                    {toys.map(toy => (
                        <div key={toy.id} className="toy-item">
                            <img src={toy.image} alt={toy.name} className="toy-image" />
                            <h3>{toy.name}</h3>
                            <p>{toy.price}</p>
                            <button className="add-to-cart" onClick={() => addToCart(toy)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ToysShoppingPage;
