import { Form, Formik, useField } from "formik";
import * as Yup from 'yup';
import styled from "@emotion/styled";
import './BookingForm.css'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌  ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

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
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
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
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
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
            .required('E-mail information is required'),
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
              placeholder="First or Full Name"
              type="text"
              name="name"
              id="name"
              className="nameInput"
            />
          </div>

          <div className="input-wrapper">
            <BasicInput
              label="Email Address"
              placeholder="name@example.com"
              type="email"
              name="email"
              id="email"
              className="emailInput"
            />
          </div>

          <div className="input-wrapper">
            <BasicInput
              label="Phone Number"
              type="text"
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

export default BookingForm;