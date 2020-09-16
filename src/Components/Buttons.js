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
`

