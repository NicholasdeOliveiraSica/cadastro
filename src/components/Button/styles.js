import styled from "styled-components";

const Button = styled.button`
    background: ${(props) =>
        props.theme === 'primary'
        ? 'linear-gradient(0deg, #803841, #fb7d5a)'
        : 'transparent'
    };
    border: ${(props) =>
        props.theme === 'primary'
        ? 'none'
        : '2px solid white'
    };
    margin: 30px 0;
    padding: 15px 30px;
    border-radius: 35px;
    color: white;
    font-size: 18px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export default Button