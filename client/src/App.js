
import './App.css';
import Login from './pages/login-registration/Login';
import Registration from './pages/login-registration/Reistration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { EmailVerification } from './pages/login-registration/EmailVerification';
import Dashboard from './pages/dashboard/Dashboard';
import Categories from './pages/categories/Categories';
import PaymentMethod from './pages/paymentmethod/PaymentMethod';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Orders from './pages/orders/Order';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';

const  App=()=> {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
          {/* privsate routes todo */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
