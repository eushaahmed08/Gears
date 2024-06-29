import React, { useEffect, useState } from 'react';
import product1Img from '../../assets/product1.jpg';
import product2Img from '../../assets/product2.jpg';
import product3Img from '../../assets/product3.jpg';
import product4Img from '../../assets/product4.jpg';
import product5Img from '../../assets/product5.jpg';
import product6Img from '../../assets/product6.jpg';
import product7Img from '../../assets/product7.jpg';
import product8Img from '../../assets/product8.jpg';
import product9Img from '../../assets/product9.jpg';
import product10Img from '../../assets/product10.jpg';

const initialProducts = [
  { id: 1, name: 'VR Headset', description: 'Description of Product 1', price: '$10', image: product1Img },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20', image: product2Img },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$10', image: product3Img },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$20', image: product4Img },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: '$10', image: product5Img },
  { id: 6, name: 'Product 6', description: 'Description of Product 6', price: '$20', image: product6Img },
  { id: 7, name: 'Product 7', description: 'Description of Product 7', price: '$10', image: product7Img },
  { id: 8, name: 'Product 8', description: 'Description of Product 8', price: '$20', image: product8Img },
  { id: 9, name: 'Product 9', description: 'Description of Product 9', price: '$10', image: product9Img },
  { id: 10, name: 'Product 10', description: 'Description of Product 10', price: '$20', image: product10Img },
];

const Home = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    if (searchTerm) {
      const filtered = initialProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(initialProducts);
    }
  }, [searchTerm]);

  return (
    <div className="homeContainer">
      <h1 className="pageTitle">Welcome to Our Store</h1>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
