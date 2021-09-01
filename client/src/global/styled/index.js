import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        /* colors */
        --clr-primary-120: rgb(73 198 255);
        --clr-primary-100: rgb(0, 176, 255);
        --clr-primary-80: rgb(1 165 239);
        --clr-black-100: rgb(0 0 0);
        --clr-black-80: rgb(28 30 33);
        --clr-black-60: rgb(68 73 80);

        /* text */
            --text-160: 1.675rem;
            --text-150: 1.575rem;
            --text-140: 1.475rem;
            --text-130: 1.375rem;
            --text-120: 1.275rem;
            --text-110: 1.175rem;
            --text-100: 1.075rem;
            --text-90: .975rem;
            --text-80: .875rem;
            --text-70: .775rem;
            --text-60: .675rem;
    }
    body{
        background: #fff;
    }
    body, html, *{
        margin: 0rem;
        padding: 0rem;
        box-sizing: border-box;
        font-family: 'Roboto', 'Open Sans', 'Montserrat';
    }
    a{
        text-decoration: none;
    }
`
