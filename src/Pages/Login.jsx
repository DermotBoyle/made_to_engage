import React, {useState} from 'react';
import SignUp from "./SignUp";
import Register from "./Register";
import {LoginCoverContainer, PrimaryContainer} from "../Components";
import Toggle from '../Components/Toggle';






const Login = () => {

const [activeState, setActiveState] = useState('SignUp')

const toggleSignUp = (type) => {
    if ( type === 'SignUp'){
        setActiveState('SignUp')
    } else {
        setActiveState('Register')
    }
}

return(
        <LoginCoverContainer>
            <PrimaryContainer>
                <Toggle activeState={activeState} changeSignUp={toggleSignUp}/>
                <SignUp isActive={activeState === 'SignUp'} />                 
                <Register isActive={activeState === 'Register'} />
            </PrimaryContainer>
        </LoginCoverContainer>
    )
}


export default Login;