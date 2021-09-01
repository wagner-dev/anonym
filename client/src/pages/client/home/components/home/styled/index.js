import styled from 'styled-components'

export const Body = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media only screen and (max-width: 620px){
        margin: 3rem 0rem 0rem 0rem;
        flex-direction: column;
    }
`