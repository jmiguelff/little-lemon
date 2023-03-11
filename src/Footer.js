import './Footer.css'
import logo from './assets/logo-white.png'

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <section className='footer-logo'>
            <img src={logo} alt="logo" width='100px'></img>
          </section>
          <section className='footer-nav'>
            <nav>
              <ul className='footer-nav-list'>
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/menu">menu</a></li>
                <li><a href="/reservations">reservations</a></li>
                <li><a href="/order">order online</a></li>
                <li><a href="/login">login</a></li>
              </ul>
            </nav>
          </section>
          <section className='footer-contacts'>
            <h2>Contacts</h2>
            <p>Address</p>
            <p>Phone Number</p>
            <p>E-mail</p>
          </section>
          <section className='footer-social'>
            <h2>Social Media</h2>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;