import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Reservations from "./pages/Reservations"
import OrderOnline from "./pages/OrderOnline"
import Login from "./pages/Login"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
