import styled from 'styled-components'

export const Body = styled.article`
    width: 50%;

    @media only screen and (max-width: 620px){
        margin: 0rem 0rem 0rem 0rem;
        width: 95%;
    }
`
export const Svg = styled.div`
    margin: 0 auto;
    width:  90%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
    }
`