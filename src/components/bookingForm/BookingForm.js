import { useState } from "react";


function BookingForm({ availableTimes, getAvailableTimes, submit }) {

  const initialValues = {
    date: '',
    time: '',
    guestsNumber: '',
    occasion: ''
  };

  const [formValues, setFormValues] = useState(initialValues);

  const dateHandleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
    getAvailableTimes(e.target.value)
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formValues);
    //alert(JSON.stringify(formValues, null, 2));
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" data-testid="date-input" id="res-date" name="date" value={formValues.date} onChange={dateHandleChange} />

      <label htmlFor="res-time">Choose time</label>
      <select data-testid="select-option" id="res-time" name="time" value={formValues.time} onChange={handleChange}>
        {availableTimes.map(time => {
          return (
            <option data-testid="option" key={time} value={time}>{time}</option>
          )
        })}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guestsNumber" value={formValues.guestsNumber} onChange={handleChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formValues.occasion} onChange={handleChange}>
        <option value={"birthday"}>Birhday</option>
        <option value={"anniversary"}>Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  )
}

export default BookingForm;