import React from 'react';
import { Formik, Form } from 'formik';
import {Description, EmailPasswordContainer, EmailInput, PasswordInput, SubmitButton, ForgottenPassword, LoginContainer} from "../Components"


const Register = ({isActive}) => {


  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if(!value){
      error = 'Required';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)){
      error = "Password requires at least one capital letter, symbol, number and at least 8 characters"
    }
    return error;
  }

return (
    <LoginContainer isActive={isActive}>
    <Description>Welcome back!</Description>
    <Formik
       initialValues={{
         firstname : '',
         lastname: '',
         email: '',
         password: '',
       }}
       onSubmit={values => {
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
      <Form style={{margin: 'auto'}}>    
        <EmailPasswordContainer>
          <EmailInput
            validate={validateEmail} 
            name="email"
            type="email"
            placeholder="Email*"
            id="email"
            aria-required="true"
            error={errors.email && touched.email}        

          />
          <PasswordInput
            validate={validatePassword}
            name="password"            
            type="password"
            placeholder="Password*"
            id="password"
            aria-required="true"
            error={errors.password && touched.password}
          />
          <ForgottenPassword>Forgot Password?</ForgottenPassword>
        </EmailPasswordContainer>
        <SubmitButton type="submit">
        LOG IN
      </SubmitButton>
      </Form>
)}

      </Formik>
    </LoginContainer>
)

}

export default Register;