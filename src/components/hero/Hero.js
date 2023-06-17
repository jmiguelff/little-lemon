import './Hero.css'
import HeroImage from "../../assets/restauranfood.jpg"
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-background">
      <div className="hero-section-container">
        <div className="hero-section-left">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-content">
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern
            twist.
          </p>
          <NavLink to="/reservations"><button className='btn'>Reserve a Table</button></NavLink>
        </div>
        <div className="hero-section-right">
          <div className="hero-image">
            <img src={HeroImage} alt="Delicious food from Little Lemon." loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;