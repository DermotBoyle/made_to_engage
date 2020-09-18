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

@media only screen and (max-width: 768px) {
  width: 100%;
  margin: .8em 0;
  
  @media only screen and (max-width: 380px) {
    height: 2em;
}

}

${({ error }) =>
error &&
css`
  border: 2px solid rgb(191, 49, 12);
  outline: none;

  &:focus,
  &:active {
    box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px
        0px 3px;
    border: 2px solid rgb(191, 49, 12);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 2px solid rgb(191, 49, 12);
  }
`}
`

export const EmailInput = styled(NameInput)`
position: relative;
margin: 0 auto 24px;
width: 85%;

@media only screen and (max-width: 380px) {
  height: 2em;
}
`

export const PasswordInput = styled(EmailInput)``