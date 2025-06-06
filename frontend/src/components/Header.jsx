import { Link } from 'react-router-dom';
import { ShoppingCart, User, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Левая часть: Логотип и меню */}
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-bold text-pink-900">
            Cosmétiques
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-pink-800 text-lg font-medium">
            <Link to="/">Accueil</Link>
            <Link to="/catalog">Catalogue</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Правая часть: Иконки */}
        <div className="flex items-center gap-4 text-pink-800">
          <Link to="/account" className="hover:text-pink-600">
            <User size={24} />
          </Link>
          <Link to="/cart" className="hover:text-pink-600">
            <ShoppingCart size={24} />
          </Link>
          <button className="hover:text-pink-600">
            <Globe size={24} />
            {/* Вариант: вставить сюда иконку-флаг Франции */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
