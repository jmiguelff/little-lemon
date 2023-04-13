import { Form, Field, Formik } from "formik";
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker, renderTimeViewClock } from '@mui/x-date-pickers';
import { TextField } from "formik-mui";
import { MenuItem, Container } from "@mui/material";
import React, { useState } from 'react';
import dayjs from "dayjs";

export default function ReserveForm() {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  return (
    <Container maxWidth="sm">
      <h1>Reserve a Table</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <Wizard
          initialValues={{
            date: dayjs(),
            time: dayjs(),
            numberOfPeople: 1,
            seatingPreferences: '',
            additionalRequest: '',
            name: '',
            email: '',
            phoneNumber: ''
          }}
          onSubmit={async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
          }}>

          <WizardStep
            onSubmit={() => console.log('Step1 onSubmit')}
            validationSchema={Yup.object({
              date: Yup
                .date()
                .min(dayjs(), 'Invalid date, it is in the past')
                .required('Reservation date is required'),
              time: Yup
                .string()
                .required('Time is required'),
              numberOfPeople: Yup
                .number()
                .min(1, 'Number of guests should be bigger then 1')
                .max(12, 'Maximum number of guests is 12')
                .required('Number of people is required')
            })}
          >
            <Field name="date">
              {({ field, form, meta }) => {
                // console.log(field)
                // console.log(form)
                console.log(meta)
                return (
                  <DatePicker
                    label="Reservation Date"
                    views={['month', 'day']}
                    slotProps={{
                      textField: {
                        required: true
                      }
                    }}
                    value={field.value}
                    onChange={(value) => {
                      form.setFieldValue('date', value)
                    }}
                    disablePast
                    onError={(err) => console.log(err)}
                  />
                )
              }}
            </Field>

            <Field name="time">
              {({ field, form, meta }) => {
                return (
                  <TimePicker
                    label="Reservation Time"
                    views={['hours', 'minutes']}
                    ampm={false}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                    slotProps={{
                      textField: {
                        required: true
                      }
                    }}
                    value={field.value}
                    onChange={(value) => {
                      form.setFieldValue('time', value)
                    }}
                  />
                )
              }}
            </Field>

            <Field
              name="numberOfPeople"
              id="numberOfPeople"
              label="Number of Guests"
              component={TextField}
              required
              variant="outlined"
              select
              fullWidth
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Field>
          </WizardStep>

          <WizardStep
            onSubmit={() => console.log('Step2 onSubmit')}>
            <Field
              name="seatingPreferences"
              id="seatingPrefrences"
              label="Seating Preferences"
              component={TextField}
              select
            >
              <MenuItem value={"restaurant"}>Restaurant</MenuItem>
              <MenuItem value={"bar"}>Bar</MenuItem>
              <MenuItem value={"outside"}>Outside</MenuItem>
            </Field>

            <Field
              name="additionalRequest"
              id="additionalRequest"
              label="Additional Requests"
              component={TextField}
              multiline
              minRows={5}
            />
          </WizardStep>

          <WizardStep
            onSubmit={() => console.log('Step3 onSubmit')}
            validationSchema={Yup.object({
              name: Yup
                .string()
                .required('Name is required'),
              email: Yup
                .string()
                .email('Invalid email address')
                .required('Email address is required'),
              phoneNumber: Yup
                .string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Phone number is required')
            })}>
            <Field
              name="name"
              label="Name"
              component={TextField}
            />

            <Field
              name="email"
              label="Email"
              component={TextField}
            />

            <Field
              name="phoneNumber"
              label="Phone Number"
              component={TextField}
              InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </WizardStep>
        </Wizard>
      </LocalizationProvider>
    </Container>
  )
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    // @ts-ignore
    if (step.props.onSubmit) {
      console.log("custom onSubmit handler")
      // @ts-ignore
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      // @ts-ignore
      validationSchema={step.props.validationSchema}
    >
      {formik => (
        <Form>
          <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>
          {step}
          <div style={{ display: 'flex' }}>
            {stepNumber > 0 && (
              <button onClick={() => previous(formik.values)} type="button">
                Back
              </button>
            )}
            <div>
              <button disabled={formik.isSubmitting} type="submit">
                {isLastStep ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const WizardStep = ({ children, ...props }) => {
  return (<>{children}</>)
}
