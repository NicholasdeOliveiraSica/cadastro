import styled from 'styled-components';

export const Main = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

    @media (max-width: 822px) {
        justify-content: flex-start;
        gap: 100px;
        width: 100vw;
    }
`


export const Container = styled.div`
    display: flex; 
    justify-content: center;
    width: 100%;
`

export const Formulario = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    width: 70%;

    @media (max-width: 600px) {
        width: 90%;

    }
`

export const Title = styled.h2`
    color: white;
    font-size: 3em;
    margin-bottom: 40px;

    @media (max-width: 822px) {
        font-size: 2em;
    }
`

export const Input1 = styled.input`
    padding: 15px;
    border-radius: 15px;
    width: 100%;
    margin: 10px 0;
    transition: all .5 ease;
    outline: none;

    @media (max-width: 822px) {
        border-radius: 10px;
    }

    &:focus {
        transform: scale(1.05);
    }
`

export const Input2 = styled.input`
    padding: 15px;
    border-radius: 15px;
    width: 100%;
    margin: 10px 0;
    transition: all .5 ease;
    outline: none;

    @media (max-width: 822px) {
    }
`

export const Button2 = styled.button`
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 15px 30px;
    border-radius: 35px;
    margin: 10px 0;
    font-size: 18px;
    cursor: pointer;
`



export const InputLabel = styled.label`
    color: #fff;

    span {
        color: red;
        font-weight: bold;
    }
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;

    section {
        display: flex;
        gap: 15px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 0;
    }
`

export const GreenFlag = styled.div`
    position: fixed;
    bottom: 30px;
    right: -200px;
    font: bold normal 20px 'roboto', sans-serif;
    width: 150px;
    height: 40px;
    text-align: center;
    color: #fff;
    background: green;
    box-sizing: content-box;
    padding: 20px 30px 25px 10px;
    border-radius: 20px 0px 0px 20px;
    transition: all 1s ease;
`
