import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AddButton, Form } from './contacts-form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const contactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Must be a word of at least 2 characters')
    .required('Required'),
  userNumber: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Must be a number format of 123-45-67'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Formik
        initialValues={{
          userName: '',
          userNumber: '',
        }}
        validationSchema={contactSchema}
        onSubmit={({ userName, userNumber }, actions) => {
          const existContact = contacts.find(
            contact => contact.name.toLowerCase() === userName.toLowerCase()
          );

          if (existContact) {
            alert(`${userName} is already in contacts`);
          } else {
            dispatch(
              addContact({ id: nanoid(), name: userName, number: userNumber })
            );
            actions.resetForm();
          }
        }}
      >
        <Form>
          <label htmlFor="userName">
            Name
            <Field id="userName" type="text" name="userName" />
            <ErrorMessage name="userName" />
          </label>

          <label htmlFor="userNumber">
            Number
            <Field id="userNumber" name="userNumber" />
            <ErrorMessage name="userNumber" />
          </label>

          <AddButton type="submit">Add contact</AddButton>
        </Form>
      </Formik>
    </>
  );
};
