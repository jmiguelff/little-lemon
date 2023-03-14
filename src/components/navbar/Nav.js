import './Nav.css'
import { NavLink } from "react-router-dom";

const Links = [
  {
    name: "Home",
    path: "/",
    id: "Home"
  },
  {
    name: "About",
    path: "/about",
    id: "about"
  },
  {
    name: "Menu",
    path: "/menu",
    id: "menu"
  },
  {
    name: "Reservations",
    path: "/reservations",
    id: "reservations"
  },
  {
    name: "Order Online",
    path: "/order",
    id: "order"
  },
  {
    name: "Login",
    path: "/login",
    id: "login"
  }
]

function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='navbar'>
          {Links.map((link) => (
            <li>
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}


export default Nav;