import React from "react";
import { Formik, Form } from 'formik';
import {
  NameContainer,
  EmailPasswordContainer,
  SubmitButton,
} from "../Components";
import { NameInput, EmailInput, PasswordInput } from "../Components/Input";
import { Description } from "../Components/Text";

const SignUp = () => {
 

  function validateName(value) {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  return (
    <>
      <Description>Sign Up for Free</Description>

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
      <Form>
        <NameContainer>
          <NameInput
            validate={validateName}  
            name="firstname"          
            id="firstname"
            type="text"
            placeholder="Firstname*"
            aria-required="true"
            error={errors.firstname && touched.firstname}           
          />
          <NameInput  
            validate={validateName}  
            name="lastname"         
            type="text"
            id="lastname"
            placeholder="Lastname*"
            aria-required="true"  
            error={errors.lastname && touched.lastname}        
          
          />
        </NameContainer>
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
            name="password"            
            type="password"
            placeholder="Password*"
            id="password"
            aria-required="true"
            error={errors.password && touched.password}
          />
        </EmailPasswordContainer>
        <SubmitButton type="submit">
        GET STARTED
      </SubmitButton>
      </Form>
)}

      </Formik>
    
    </>
  );
};

export default SignUp;
