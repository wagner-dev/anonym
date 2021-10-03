import styled, {createGlobalStyle} from 'styled-components'

export const Body = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5rem 0rem 0rem 0rem;
`
export const GlobalStyle = createGlobalStyle`
    body{
        background: #fafafa  !important;
    }
`

export const NotFound = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem 0rem 0rem 0rem;
    text-align: center;

    h2{
        font-size: var(--text-130);
    }
    span{
        font-size: var(--text-90);

        a{
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 620px) {
        h2{
        font-size: var(--text-120);
        }
        span{
            font-size: var(--text-80);
        }
    }
`