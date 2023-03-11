import './Header.css'
import Nav from './Nav';
import logo from './assets/Logo.svg'

function Header() {
  return (
    <>
      <header>
        <div className='header-container'>
          <div className='header-logo'>
            <a href="/"><img src={logo} alt="logo" /></a>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;