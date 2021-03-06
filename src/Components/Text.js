import styled from 'styled-components';
import {typeScale} from "../utils"

export const Description = styled.h2`
text-align: center;
font-family: ${props => props.theme.primaryFont};
font-size: ${typeScale.Header1};
color: ${props => props.theme.activeButtonText};

@media only screen and (max-width: 340px) {
    font-size: 18px;
}
`
