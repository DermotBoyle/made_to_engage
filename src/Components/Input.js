import styled from 'styled-components';



export const NameInput = styled.input`
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

:invalid{
  border: 1px solid red;
}

`

export const EmailInput = styled(NameInput)`
margin: 0 auto 24px;
width: 85%;
`

export const PasswordInput = styled(EmailInput)``