/**
 * @file address.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React from 'react';
// npm install formik
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Usage example
<Formik
  initialValues={{ name: '', email: '' }}
  onSubmit={(values) => {
    // Handle form submission
  }}
>
  <Form>
    <Field type="text" name="name" />
    <ErrorMessage name="name" component="div" />
    <Field type="email" name="email" />
    <ErrorMessage name="email" component="div" />
    <button type="submit">Submit</button>
  </Form>
</Formik>
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name', { required: true })} />
      {errors.name && <span>This field is required</span>}

      <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <span>Please enter a valid email address</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
// npm install react-final-form
import { Form, Field } from 'react-final-form';

<Form
  onSubmit={(values) => {
    // Handle form submission
  }}
  render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Field name="name" component="input" type="text" />
      <Field name="email" component="input" type="email" />
      <button type="submit">Submit</button>
    </form>
  )}
/>
