import React from "react";
import { Formik, Form } from "formik";
import {
  Description,
  EmailPasswordContainer,
  EmailInput,
  PasswordInput,
  SubmitButton,
  ForgottenPassword,
  LoginContainer,
  ErrorLabel,
  InputContainer,
} from "../Components";

const Register = ({ isActive }) => {
 
  function validatePassword(value) {
    let error;
 if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)) {
      error = "password requires capital letter, number and symbol";
    }
    return error;
  }

  return (
    <LoginContainer isActive={isActive}>
      <Description>Welcome back!</Description>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ margin: "auto" }}>
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
                  {errors.password && touched.password ? (
                  <ErrorLabel>{errors.password}</ErrorLabel>
                ) : (
                  ""
                )}
              </InputContainer>
              <ForgottenPassword>Forgot Password?</ForgottenPassword>
            </EmailPasswordContainer>
            <SubmitButton type="submit">LOG IN</SubmitButton>
          </Form>
        )}
      </Formik>
    </LoginContainer>
  );
};

export default Register;
