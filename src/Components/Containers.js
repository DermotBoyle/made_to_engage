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
width: 95%;
height: 95%;
background-color: ${props => props.theme.backgroundPrimary};
border-radius: 4px;
`

