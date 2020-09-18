import React from "react";
import { Formik, Form } from 'formik';
import {
  NameContainer,
  EmailPasswordContainer,
  SubmitButton,
  SignUpContainer
} from "../Components";
import { NameInput, EmailInput, PasswordInput } from "../Components/Input";
import { Description } from "../Components/Text";

const SignUp = ({isActive}) => {
 

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
    <SignUpContainer isActive={isActive}>
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
            validate={validatePassword}
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
    
    </SignUpContainer>
  );
};

export default SignUp;
