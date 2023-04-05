import { useFormik, Form, Field } from "formik";

export default function ReservationForm() {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      numberOfPeople: '',
      seatingPreferences: '',
      specialRequirements: '',
      specialOccasion: '',
      additionalRequest: '',
      name: '',
      email: '',
      phoneNumber: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <div>Use an UI library</div>
  )
}