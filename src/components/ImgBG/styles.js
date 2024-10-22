import styled from "styled-components";

export const Background = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, #fb7d5a, #803841);
    height: 350px;
    border-radius: 50px;
    box-sizing: content-box;
    padding: 0 100px;
    margin-top: 30px;

    @media (max-width: 822px) {
        display: block;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 20px;
    }
`

export const Image = styled.img`
    height: 100%;

    @media (max-width: 822px) {
        border-radius: 0;
        display: block;
        width: 90vw;
        margin: auto;
    }
`