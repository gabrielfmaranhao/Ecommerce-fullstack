import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --red:  #EB5757;
        --black: #333333;
        --grey: #BDBDBD;
    }

    html, body, #root{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4 ,h5 ,h6 , p  {
        margin:0px
    }

    body {
        background-color: var(--white);
    }

    h1, h2, li {
        color: white;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    span {
        display: block;
    }

`