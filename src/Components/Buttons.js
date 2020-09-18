import styled from "styled-components"
import {typeScale} from "../utils/typography"

export const ToggleButton = styled.button`
width: 50%;
background-color: ${props => props.isActive ? props.theme.activeButton : props.theme.deactiveButton};
color: ${props => props.isActive ? props.theme.activeButtonText : props.theme.deactiveButtonText};
border: none;
font-family: ${props => props.theme.primaryFontMedium};
font-size: ${typeScale.Header2};

:focus{
    outline: none;
}

:hover{
background-color: ${props => props.theme.activeButton};
color : ${props => props.theme.activeButtonText}
-webkit-transition: 1000ms linear;
-ms-transition: 1000ms linear;
transition: 1000ms linear;
}

@media only screen and (max-width: 380px) {
    font-size: 20px;
    height: 2em;
}
`

export const SubmitButton = styled.button`
font-family: ${props => props.theme.primaryFontBold};
font-size: ${typeScale.Header2};
display: block;
background: ${props => props.theme.activeButton};
margin: auto;
margin-bottom: 1.5em;
height: 3em;
width: 85%;
color: ${props => props.theme.activeButtonText};
border: none;


@media only screen and (max-width: 380px) {
    height: 2em;
    font-size: 20px;
}

`

