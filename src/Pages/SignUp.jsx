import React from "react";
import { Formik, Form } from 'formik';
import {
  NameContainer,
  EmailPasswordContainer,
  SubmitButton,
  SignUpContainer,
  ErrorLabel,
  InputContainer
} from "../Components";
import { NameInput, EmailInput, PasswordInput } from "../Components/Input";
import { Description } from "../Components/Text";

const SignUp = ({isActive}) => {
 
  function validatePassword(value) {
    let error;
   if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)){
    error = "password requires capital letter, number and symbol";
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
            name="firstname"          
            id="firstname"
            type="text"
            placeholder="Firstname*"
            required aria-required="true"
          />
          <NameInput  
            name="lastname"         
            type="text"
            id="lastname"
            placeholder="Lastname*"
           required aria-required="true"            
          />
        </NameContainer>
        <EmailPasswordContainer>
          <EmailInput
            name="email"
            type="email"
            placeholder="Email*"
            id="email"
            required aria-required="true"
          />
          <InputContainer>
          <PasswordInput
            validate={validatePassword}
            name="password"            
            type="password"
            placeholder="Password*"
            id="password"
            required aria-required="true"
            error={errors.password && touched.password}
          />
          {errors.password && touched.password ? <ErrorLabel>{errors.password}</ErrorLabel> : ''}
          </InputContainer>
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
