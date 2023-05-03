import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../bookingForm/BookingForm";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const submitAPI = function (formData) {
  return true;
};

const initializeTimes = () => {
  let today = new Date()
  const initialTimes = fetchAPI(today)
  return initialTimes
}

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case 'book': {
      // console.log("Update avi times for date: " + action.value)
      return availableTimes = fetchAPI(action.value)
    }
    default: {
    }
  }
  return availableTimes;
}

function BookingMain() {
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes)
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmation')
    }
  }

  const dispatchReservation = (date) => {
    let myDate = new Date(date)
    // @ts-ignore
    dispatch({
      type: 'book',
      value: myDate
    })
  }

  return (
    <BookingForm availableTimes={state} getAvailableTimes={dispatchReservation} submit={submitForm} />
  )
}

export default BookingMain;