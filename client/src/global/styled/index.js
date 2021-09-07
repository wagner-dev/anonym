import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        /* colors */
        --clr-primary-180: #e4faff;
        --clr-primary-160: #c8f4ff;
        --clr-primary-140: #7cd6ff;
        --clr-primary-120: rgb(104 225 253);
        --clr-primary-100: rgb(0, 176, 255);
        --clr-primary-80: rgb(1 165 239);
        --clr-primary-60: #489caf;
        --clr-black-100: rgb(0 0 0);
        --clr-black-80: rgb(28 30 33);
        --clr-black-60: rgb(68 73 80);
        --clr-black-20: #dbdbdb;

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
        font-family: 'Open Sans', 'Roboto', 'Montserrat';
    }
    a{
        text-decoration: none;
        color: #000;
    }
    img,span, h1, h2, h3, h4, svg, a, p{
        user-select: none;
    }
`
