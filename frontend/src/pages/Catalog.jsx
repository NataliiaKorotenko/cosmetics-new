import React, { useEffect, useState } from 'react';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') // адрес твоего бэкенда
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки товаров');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка товаров...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Каталог товаров</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} грн</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
