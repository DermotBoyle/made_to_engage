import { Field } from 'formik';
import styled, { css } from "styled-components";



export const NameInput = styled(Field)`
font-family: ${props => props.theme.primaryFontMedium};
color: ${props => props.theme.activeButtonText};
width: 47%;
height: 3em;
border:  1px solid ${props => props.theme.deactiveButtonText};
background-color: ${props => props.theme.backgroundPrimary};
padding: 0 8px;

::placeholder { 
    color: ${props => props.theme.deactiveButtonText};
    opacity: 1;     
  }
  
  :-ms-input-placeholder { 
    color: ${props => props.theme.deactiveButtonText};
  }

:focus::placeholder{
    opacity: 0;
}

${({ error }) =>
error &&
css`
  border: 1px solid rgb(191, 49, 12);
  outline: none;

  &:focus,
  &:active {
    box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px
        0px 3px;
    border: 1px solid rgb(191, 49, 12);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 1px solid rgb(191, 49, 12);
  }
`}



`

export const EmailInput = styled(NameInput)`
margin: 0 auto 24px;
width: 85%;
`

export const PasswordInput = styled(EmailInput)``