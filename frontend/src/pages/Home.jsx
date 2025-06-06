import HomePage from './HomePage';

const Home = () => {
  return (
  
<div
  className="min-h-screen w-full bg-cover bg-center border-4 border-red-500"
>
      <HomePage />
      <div className="bg-white bg-opacity-80 p-8 rounded shadow-md max-w-xl mx-auto mt-12">
        <h1>Добро пожаловать в наш магазин!</h1>
        <p>Здесь будет каталог товаров или другая информация для покупателей.</p>
      </div>
    </div>
  );
};



export default Home;