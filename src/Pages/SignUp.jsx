import React, { useState } from "react";
import {
  NameContainer,
  EmailPasswordContainer,
  SubmitButton,
} from "../Components";
import { NameInput, EmailInput, PasswordInput } from "../Components/Input";
import { Description } from "../Components/Text";

const SignUp = () => {
  const [error, setError] = useState();
  const [firstname, setFirstname] = useState("");
  const [firstnameAccepted, setFirstnameAccepted] = useState('');
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [emailAccepted, setEmailAccepted] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordAccepted, setPasswordAccepted] = useState(null);

  const setInputData = (event) => {
    let data = event.target.value;
    let id = event.target.id;

    switch (id) {
      case "firstname":
        setFirstname(data);
        break;

      case "lastname":
        setLastname(data);
        break;

      case "email":
        setEmail(data);
        isEmailValid(data);
        break;

      case "password":
        setPassword(data);
        isPasswordValid(data);
        break;

      default:
        break;
    }
  };

  const isEmailValid = (data) => {
      //test simple regex for emails      
      let emailRegex = /\S+@\S+\.\S+/

      if(data.match(emailRegex)){
        setEmailAccepted(true);
      } else {
          setEmailAccepted(false);
      }     
  }

  const isPasswordValid = (data) => {
        //test simple regex for passwords requirements      
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(data.match(passwordRegex)){            
          setPasswordAccepted(true);
        } else {
            setPasswordAccepted(false);
        }
  }


  const verifyFormData = () => {

    // let emptyPass = findEmptyInputApplyLabel();
    let emailPass =  verifyEmail();
    let passwordPass = verifyPassword();

    if(emailPass && passwordPass){

        //apply some password salting && encryption etc here

        let personalDetails = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password,
        }
        sendDataToApi(personalDetails);
    }   
  };

  const sendDataToApi = (personalDetails) => {
    alert(personalDetails);
  }

  const verifyEmail = () => {    
    if(emailAccepted){
      return true  
    } else {
        setError('email');
    }    
  }

  const verifyPassword = () => {
      if(passwordAccepted){
        return true
      } else {
          setError('password')
      }
  } 

  const checkIsEmpty = (e) => {
        let valueOfInput = e.target.value;
        if(valueOfInput === ''){
            setError(e.target.id)
        }        
  }


  return (
    <>
      <Description>Sign Up for Free</Description>
      <form>
        <NameContainer>
          <NameInput
            className={error === "firstname" ? "has-error" : ""}
            id="firstname"
            type="text"
            placeholder="Firstname*"
            aria-required="true"
            onChange={(e) => setInputData(e)}
            onBlur={(e) => checkIsEmpty(e)}
          />
          <NameInput
            className={error === "lastname" ? "has-error" : ""}
            type="text"
            id="lastname"
            placeholder="Lastname*"
            aria-required="true"
            onChange={(e) => setInputData(e)}
            onBlur={(e) => checkIsEmpty(e)}
          />
        </NameContainer>
        <EmailPasswordContainer>
          <EmailInput
            className={error === "email" ? "has-error" : ""}
            type="email"
            placeholder="Email*"
            id="email"
            aria-required="true"
            onChange={(e) => setInputData(e)}
          />
          <PasswordInput
            className={error === "password" ? "has-error" : ""}
            type="password"
            placeholder="Password*"
            id="password"
            aria-required="true"
            onChange={(e) => setInputData(e)}
          />
        </EmailPasswordContainer>
      </form>
      <SubmitButton type="submit" onClick={() => verifyFormData()}>
        GET STARTED
      </SubmitButton>
    </>
  );
};

export default SignUp;
