import { Form, Formik, useField } from "formik";
import * as Yup from 'yup';
import styled from "@emotion/styled";
import './BookingForm.css'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const DateInput = ({ label, updateTimes, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="dateInput"
        {...field}
        {...props}
        onChange={(e) => {
          field.onChange(e);
          updateTimes(new Date(e.target.value))
        }}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const BasicInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const CustomSelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

function BookingForm({ availableTimes, getAvailableTimes, apiSubmit }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="form-wrapper">
      <h2>Book a Table!</h2>
      <Formik
        initialValues={{
          date: '',
          time: '',
          guestsNumber: '',
          occasion: '',
          name: '',
          email: '',
          phoneNumber: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          apiSubmit(values);
        }}
        validationSchema={Yup.object({
          date: Yup
            .date()
            .min(today, 'Invalid date, it is in the past')
            .required('Reservation date is required'),
          time: Yup
            .string()
            .required('Time is required'),
          guestsNumber: Yup
            .number()
            .min(1, 'Number of guests should be bigger then 1')
            .max(12, 'Maximum number of guests is 12')
            .required('Number of people is required'),
          occasion: Yup
            .string(),
          name: Yup
            .string()
            .required('Name is required'),
          email: Yup
            .string()
            .email('Invalid email address')
            .required('At least one type of contact information is required'),
          phoneNumber: Yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Phone number is required')
        })}
      >
        <Form>
          <div className="input-wrapper">
            <DateInput
              data-testid="date-input"
              label="Choose a Date"
              name="date"
              type="date"
              id="date"
              updateTimes={getAvailableTimes}
            />
          </div>

          <div className="input-wrapper">
            <CustomSelect
              data-testid="time-input"
              label="Choose a Time"
              name="time"
              id="time"
              className="timeSelect"
            >
              {availableTimes.map(timeOption => {
                return (
                  <option data-testid="time-opt-input" key={timeOption} value={timeOption}>{timeOption}</option>
                )
              })}
            </CustomSelect>
          </div>

          <div className="input-wrapper">
            <BasicInput
              label="Number of Guests"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              name="guestsNumber"
              id="guestsNumber"
              className="nbrGuests"
            />
          </div>

          <div className="input-wrapper">
            <CustomSelect
              data-testid="occasion-input"
              label="Choose an Occasion"
              name="occasion"
              id="occasion"
              className="occasionSelect"
            >
              <option value={"birthday"}>Birthday</option>
              <option value={"anniversary"}>Anniversary</option>
            </CustomSelect>
          </div>

          <div className="input-wrapper">
            <BasicInput
              label="Name"
              type="text"
              name="name"
              id="name"
              className="nameInput"
            />
          </div>

          <div className="input-wrapper">
            <BasicInput
              label="Email Address"
              type="email"
              name="email"
              id="email"
              className="emailInput"
            />
          </div>

          <div className="input-wrapper">
            <BasicInput
              label="Phone Number"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              className="phoneNumberInput"
            />
          </div>

          <button type="submit">Make Your Reservation</button>
        </Form>
      </Formik>
    </div>
  );
};

/*
function BookingForm2({ availableTimes, getAvailableTimes, submit }) {

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
    getAvailableTimes(new Date(e.target.value))
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
*/
export default BookingForm;