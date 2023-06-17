import './Review.css'

function Review(props) {
  return (
    <div className="review-container">
      <div className="rev-title-container">
        <h3>Rating: </h3>
        <div className="review-score">
          <p><span>{props.score}</span>/5</p>
        </div>
      </div>
      <div className="customer-container">
        <div className="customer-image">
          <img src={props.img} alt="Customer portrait" loading="lazy"></img>
        </div>
        <div className="customer-name">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="rev-description-container">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Review;