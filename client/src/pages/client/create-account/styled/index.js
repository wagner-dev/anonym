import styled from 'styled-components'

export const Content = styled.section`
    margin: 5rem auto 2rem auto;
    width: 80%;
    padding: 0rem 0rem;
    box-shadow: 0px 0px 20px 5px #f1f1f1;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 620px) {
        flex-direction: column;
        width: 98%;
    }
`