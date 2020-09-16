import React from 'react';
import {NameContainer} from "../Components"
import { NameInput } from '../Components/Input';
import {Description} from "../Components/Text"



const SignUp = () => {

    return (

        <>
            <Description>Sign Up for Free</Description>
        <form>
            <NameContainer>
                <NameInput type="text" placeholder="Firstname" aria-required="true" />
                <NameInput type="text" placeholder="Surname" aria-required="true"/>
            </NameContainer>
        </form>

        </>

    )
}

export default SignUp;