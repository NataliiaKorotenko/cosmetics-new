import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Catalog from './pages/Catalog'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница - доступна всем */}
        <Route path="/" element={<Home />} />

        {/* Страница каталога */}
        <Route path="/catalog" element={<Catalog />} />

        {/* Страница логина */}
        <Route path="/login" element={<Login />} />

        {/* Админская панель - приватный маршрут */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Для любого другого пути - 404 */}
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </Router>
  );
}

export default App;
