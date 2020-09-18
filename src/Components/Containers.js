import styled from "styled-components"


export const InputContainer = styled.div`
position: relative;
display: flex;
width: 100%;
flex-direction:column;
justify-content: center;
position: relative:
`

export const LoginCoverContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: fit-content;
width: 35%;
background-color: ${props => props.theme.backgroundSecondary};
padding: 1em;

@media only screen and (max-width: 1300px) {
width: 70%;
}

@media only screen and (max-width: 770px) {
width: 90%
}
`

export const PrimaryContainer = styled.div`
positon: relative;
width: 95%;
height: fit-content;
background-color: ${props => props.theme.backgroundPrimary};
border-radius: 4px;
`

export const ToggleContainer = styled.div`
display: flex;
width: 85%;
background: ${props => props.theme.deactiveButton};
height: 3.5em;
margin: auto;
margin-top: 42px;

@media only screen and (max-width: 380px) {
    height: 2em;
    margin-top: 1em;
  }
`

export const NameContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
width: 85%;
margin: 1em auto;

.has-error{
    border: solid 1px red;
}

@media only screen and (max-width: 768px) {
    flex-direction: column;
}
` 

export const EmailPasswordContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 .has-error{
     border: solid 1px red;
 }
`

export const SignUpContainer = styled.div`
position: ${props => props.isActive ? 'none' : 'absolute'};
visibility: ${props => props.isActive ? 'visible' : 'hidden'};
opacity: ${props => props.isActive ? 1 : 0};
-webkit-transition: opacity .4s linear;
-ms-transition: opacity .4s linear;
transition: opacity .4s linear;
`

export const LoginContainer = styled.div`
position: ${props => props.isActive ? 'none' : 'absolute'};
visibility: ${props => props.isActive ? 'visible' : 'hidden'};
opacity: ${props => props.isActive ? 1 : 0};
-webkit-transition: opacity .4s linear;
-ms-transition: opacity .4s linear;
transition: opacity .4s linear;
`

export const ErrorLabel = styled.p`
display: block;
font-size: 12px;
color: ${props => props.theme.activeButtonText};
margin: 0;
margin-top: -1.2em;
margin-bottom: 1em;
margin-left: 3em;
`

