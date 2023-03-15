import './Nav.css'
import { NavLink } from "react-router-dom";

const Links = [
  {
    name: "Home",
    path: "/",
    id: 1
  },
  {
    name: "About",
    path: "/about",
    id: 2
  },
  {
    name: "Menu",
    path: "/menu",
    id: 3
  },
  {
    name: "Reservations",
    path: "/reservations",
    id: 4
  },
  {
    name: "Order Online",
    path: "/order",
    id: 5
  },
  {
    name: "Login",
    path: "/login",
    id: 6
  }
]

function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='navbar'>
          {Links.map((link) => (
            <li key={link.id}>
              <NavLink
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