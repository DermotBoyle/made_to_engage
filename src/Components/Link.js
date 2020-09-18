import styled from 'styled-components';
import {typeScale} from '../utils'


export const ForgottenPassword = styled.a`
color : ${props => props.theme.activeButton};
font-family: ${props => props.theme.primaryFontMedium};
font-size: ${typeScale.Link};
text-align: end;
margin-right: 2em;
margin-top: -.8em;
margin-bottom: 1.5em;
`