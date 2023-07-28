import { styled } from "styled-components"



const Button = styled.button`
    background-color: ${props => props.colorstyle ? "rgba(255, 57, 57, 0.60);" : "#F8A607"};
    border: #FFF;
    border-radius: ${props => props.cardstyle ? "0" : "10px"};
    color: #FFF;
    padding: 17px 0;
    text-align: center;
`

export default Button