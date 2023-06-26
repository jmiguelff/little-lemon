import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css'

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
  const [isActive, setActive] = useState(0);

  const handleClick = () => {
    if (isActive) {
      setActive(0);
    } else {
      setActive(1);
    }
  }

  return (
    <>
      <nav className="navbar">
        <button className="toggle-button" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
          <ul>
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
        </div>
      </nav>
    </>
  );
}


export default Nav;