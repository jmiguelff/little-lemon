import './ConfirmationBooking.css'
import { useNavigate } from "react-router-dom";

function ConfirmationBooking() {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('/');
  }

  return (
    <div className="confirmation-container">
      <h2>Thanks for your reservation!</h2>
      <div className="btn-container">
        <button onClick={routeChange}>Homepage</button>
      </div>
    </div>

  )
}

export default ConfirmationBooking;