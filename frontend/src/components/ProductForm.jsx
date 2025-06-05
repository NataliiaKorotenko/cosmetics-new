import { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    imageUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', form);
      alert('Товар добавлен!');
      setForm({ name: '', price: '', imageUrl: '', description: '' });
    } catch (err) {
      console.error(err);
      alert('Ошибка при добавлении товара');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Название" value={form.name} onChange={handleChange} />
      <input name="price" placeholder="Цена" value={form.price} onChange={handleChange} />
      <input name="imageUrl" placeholder="Ссылка на изображение" value={form.imageUrl} onChange={handleChange} />
      <textarea name="description" placeholder="Описание" value={form.description} onChange={handleChange} />
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default ProductForm;
