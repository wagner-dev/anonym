import styled from 'styled-components'

export const Body = styled.article`
    width: 20%;
    height: 100vh;
    /* border-right: 1px solid var(--clr-black-20); */
    position: fixed;
    right: 10%;
    margin: 0rem 0rem 0rem 0rem;

    @media only screen and (max-width: 820px){
        display: none;
    }
`
export const Profile = styled.a`
    display: flex;
    align-items: center;
    padding: 1.5rem .5rem;
    border-bottom: 1px solid var(--clr-black-20);
    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    span{
        margin: 0rem 0rem 0rem .5rem;
        font-size: var(--text-80);
        font-weight: bold;
    }
`
export const Link = styled.a`
    svg{
        width: 15px;
        height: 15px;
    }

`