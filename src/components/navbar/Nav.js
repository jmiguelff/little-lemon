import './Nav.css'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='navbar'>
          <li><Link to="/" >home</Link></li>
          <li><Link to="/about" >about</Link></li>
          <li><Link to="/menu" >menu</Link></li>
          <li><Link to="/reservations" >reservations</Link></li>
          <li><Link to="/order" >order online</Link></li>
          <li><Link to="/login" >login</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;