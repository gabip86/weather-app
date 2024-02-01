import React, { ReactElement } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { UserFormikValues } from '../types';
import * as yup from 'yup';

export const UserSearch = (): ReactElement => {
  const initialValues = {
    userName: '',
  }

  const userSchema = yup.object({
    userName: yup.string().required('Required')
  })

  return (
    <>
      <Formik<UserFormikValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={userSchema}
      >
        {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
            errors
          }: FormikProps<UserFormikValues>): ReactElement => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor='userName'>Username</label>
            <input id='userName' name='userName' placeholder='Enter username here' onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.userName} />
            {touched.userName && errors.userName ? (
              <div>{errors.userName}</div>
            ) : null}
            <button type='submit'>Search</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
