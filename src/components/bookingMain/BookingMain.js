import { useReducer } from "react";
import BookingForm from "../bookingForm/BookingForm";

const initializeTimes = () => {
  return [
    {
      slot: 1,
      value: "17:00"
    },
    {
      slot: 2,
      value: "18:00"
    },
    {
      slot: 3,
      value: "19:00"
    },
    {
      slot: 4,
      value: "20:00"
    },
    {
      slot: 5,
      value: "21:00"
    },
    {
      slot: 6,
      value: "22:00"
    }
  ]
}

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case 'book': {
      console.log("Book time: " + action.value)
      return availableTimes.filter(time => time.value !== action.value)
    }
    default: {
      console.log("default")
    }
  }
  return availableTimes;
}

function BookingMain() {
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes)

  const dispatchReservation = (time) => {
    console.log(time)
    // @ts-ignore
    dispatch({
      type: 'book',
      value: time
    })
  }

  return (
    <BookingForm availableTimes={state} getAvailableTimes={dispatchReservation} />
  )
}

export default BookingMain;