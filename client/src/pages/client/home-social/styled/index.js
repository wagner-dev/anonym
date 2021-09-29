import styled, { createGlobalStyle } from 'styled-components'

export const Body = styled.section`
    width: 75%;
    margin: 6rem auto 0rem auto;
    display: flex;

    @media only screen and (max-width: 620px){
        margin: 4rem auto 0rem auto;
        width: 100%;
        flex-direction: column;
    }
`
export const GlobalStyle = createGlobalStyle`
    body{
        background: #fafafa !important;
        
        @media only screen and (max-width: 620px) {
            background: #ffff !important;    
        }
    }

`