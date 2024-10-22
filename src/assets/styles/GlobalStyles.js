import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    ::-webkit-scrollbar{
        width: 0;
        height: 0;
    }

    body {
        background-color: #171e36;
        display: flex;
        justify-content: center;
    }
`


