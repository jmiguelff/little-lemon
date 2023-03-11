import './Nav.css'

function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='navbar'>
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/menu">menu</a></li>
          <li><a href="/reservations">reservations</a></li>
          <li><a href="/order">order online</a></li>
          <li><a href="/login">login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;