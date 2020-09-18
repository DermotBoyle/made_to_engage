import styled from "styled-components"


export const LoginCoverContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 60%;
width: 35%;
background-color: ${props => props.theme.backgroundSecondary};
`

export const PrimaryContainer = styled.div`
positon: relative;
width: 95%;
height: fit content;
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
`

export const NameContainer = styled.span`
position: relative;
display: flex;
justify-content: space-between;
width: 85%;
margin: 24px auto;

.has-error{
    border: solid 1px red;
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