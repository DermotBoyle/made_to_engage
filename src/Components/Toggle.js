import React from "react";
import {ToggleContainer, ToggleButton} from "../Components"

const Toggle = ({activeState, changeSignUp}) => {

const changeState = (type) => {
    changeSignUp(type);
}

  return (
    <ToggleContainer>
      <ToggleButton
        onClick={() => changeState("SignUp")}
        isActive={activeState === "SignUp"}
      >
        Sign Up
      </ToggleButton>
      <ToggleButton
        onClick={() => changeState("Register")}
        isActive={activeState === "Register"}
      >
        Register
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
