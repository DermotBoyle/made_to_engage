import styled from 'styled-components';



export const NameInput = styled.input`
font-family: ${props => props.theme.primaryFont};
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
`