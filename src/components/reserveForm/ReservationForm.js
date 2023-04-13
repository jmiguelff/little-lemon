import "./ReservationForm.css"
import ImageA from "../../assets/aboutA.jpg"
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';

export default function ReservationForm() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="reserve-step-1">
      <Formik
        initialValues={{
          date: new Date(),
          time: new Date(),
          numberOfGuests: '1',
          seatingPreferences: 'restaurant',
          additionalRequest: '',
          name: '',
          email: '',
          mobile: ''
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          date: Yup
            .date()
            .min(today, 'Invalid date, it is in the past')
            .required('Reservation date is required'),
          time: Yup
            .string()
            .required('Time is required'),
          numberOfGuests: Yup
            .number()
            .min(1, 'Number of guests should be bigger then 1')
            .max(12, 'Maximum number of guests is 12')
            .required('Number of people is required'),
          name: Yup
            .string()
            .required('Name is required'),
          email: Yup
            .string()
            .email('Invalid email address')
            .required('At least one type of contact information is required'),
          mobile: Yup
            .string()
            .required('Phone number is required')
        })}
      >
        {({ errors, touched, values }) => (
          <div className="left-container">
            <h2 className="reserve-title">Reserve a Table</h2>
            <Form className="reserve-form">
              <label htmlFor="date">Date</label>
              <Field name="date" type="date" />
              <ErrorMessage name="date" />

              <label htmlFor="time">Time</label>
              <Field name="time" type="time" />
              <ErrorMessage name="time" />

              <label htmlFor="numberOfGuests">Number of Guests</label>
              <Field name="numberOfGuests" type="number" />
              <ErrorMessage name="numberOfGuests" />

              <label htmlFor="seatingPreferences">Seating Preferences</label>
              <Field name="seatingPreferences" as="select">
                <option value="outside">Outside</option>
                <option value="restaurant">Restaurant</option>
                <option value="bar">Bar</option>
              </Field>
              <ErrorMessage name="seatingPreferences" />

              <label htmlFor="additionalRequests">Additional Requests</label>
              <Field name="additionalRequests" as="textarea" />
              <ErrorMessage name="additionalRequests" />

              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />

              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />

              <label htmlFor="mobile">Phone Number</label>
              <Field name="mobile" type="text" />
              <ErrorMessage name="mobile" />
            </Form>
          </div>
        )}
      </Formik>
      <div className="right-container">
        <img className="right-image" src={ImageA} alt="Mario and Adrian Cooking" />
      </div>
    </div>
  )
}