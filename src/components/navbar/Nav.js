import './Nav.css'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='navbar'>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/menu" >Menu</Link></li>
          <li><Link to="/reservations" >Reservations</Link></li>
          <li><Link to="/order" >Order Online</Link></li>
          <li><Link to="/login" >Login</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;