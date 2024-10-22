import styled from "styled-components";

export const Main = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;

    @media (max-width: 822px) {
        justify-content: flex-start;
        gap: 50px;
        width: 100vw;
    }
`

export const PersonContainer = styled.div`
    display: grid;
    grid-template-columns: 315px 315px 315px;
    gap: 20px;
    
    @media (max-width: 1010px) {
        grid-template-columns: 315px 315px;
        gap: 30px;
    }

    @media (max-width: 822px) {
        grid-template-columns: 400px;
        gap: 20px;
    }
`

export const PersonCard = styled.div`
    display: flex;
    background: #252d48;
    justify-content: space-between;
    padding: 15px;
    border-radius: 20px;
    gap: 10px;
    transition: all .5s ease;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        color: #fff;
    }

    p {
        font: 200 normal 14px 'roboto';
    }

    h3 {
        text-transform: capitalize;

    }

    &:hover {
        transform: scale(1.05);
    }
`

export const Avatar = styled.img`
    width: 100px;
`

export const Title = styled.h2`
    color: white;
    font-size: 3em;
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 822px) {
        font-size: 2.5;
    }
`

export const TrashIcon = styled.img`
    width: 25px;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.1)
    }

    &:active {
        opacity: 0.8;
        transform: scale(1.05)
    }
`
