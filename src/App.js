import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
//import Reservations from "./pages/Reservations"
import BookingPage from './pages/BookingPage'
import OrderOnline from "./pages/OrderOnline"
import Login from "./pages/Login"
import ConfirmationPage from "./pages/ConfirmationPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default App;
