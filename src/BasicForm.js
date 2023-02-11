import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

// const FormValidationSchema = yup.object({
//   email: yup.string()
//     .min(5, 'Need a longer email')
//     .required('why not fill this email'),
//   password: yup
//     .string('Too much password')
//     .min(12)
//     .required('why not fill this password'),
// })

// const FormValidationSchema = yup.object({password:yup.string().min(8),})

const formValidationSchema = yup.object({
  email: yup.string().required(),
  password: yup
    .string()
    .min(8, 'Need strong password')
    .max(16, 'Too much password')
    .required(),
})

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log('onSubmit', values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />{' '}
      <br></br>
      {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
      <br></br>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        placeholder="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />{' '}
      <br></br>
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ''}
      <br></br>
      <button type="submit">Submit</button>
    </form>

    // <form onSubmit={formik.handleSubmit}>
    //   <input
    //     onChange={formik.handleChange}
    //     type="email"
    //     id="email"
    //     name="email"
    //     value={formik.values.email}
    //     placeholder="email"
    //   ></input>

    //   <input
    //     onChange={formik.handleChange}
    //     type="password"
    //     name="password"
    //     id="password"
    //     value={formik.values.password}
    //     placeholder="password"
    //   ></input>
    //   <button type="button">Submit</button>
    // </form>
  )
}
