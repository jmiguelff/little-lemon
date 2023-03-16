import './Card.css'
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="title-container">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-price">{props.price}</p>
      </div>
      <div className="description-container">
        <p className="card-description">{props.description}</p>
      </div>
      <div className="cta-container">
        <NavLink className="card-cta" to="/order">Order a delivery</NavLink>
      </div>
    </div>
  )
}

export default Card;