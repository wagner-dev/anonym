import styled from 'styled-components'

export const Body = styled.section`
    width: 100%;
    margin: 6rem 0rem 2rem 0rem;
    
    @media only screen and (max-width: 620px) {
        margin: 4rem 0rem 2rem 0rem;
    }
`
export const NotFound = styled.section`
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