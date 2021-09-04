import styled from 'styled-components'

export const MenuBody = styled.header`
    width: 100%;
    max-width: 100%;
    background: #fff;
    position: fixed;
    top: 0%;
    border-bottom: ${(props) => props.border ? '1px solid #dbdbdb' : 'none'};
    z-index: 1000;
`
export const Menu = styled.nav`
    padding: .9rem 0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Title = styled.a`
    h1{
        font-size: var(--text-160);
        font-family: 'Montserrat' !important;
        user-select: none;
        color: var(--clr-primary-100);
        
        :hover{
            transition: .2s ease;
            color: var(--clr-primary-80);
        }
    }

    @media only screen and (max-width: 620px) {
        h1{
            font-size: var(--text-120);
        }
    }
`
export const Content = styled.div`

`
export const Link = styled.a`
    font-size: var(--text-90);
    font-family: 'Open Sans' !important;
    color: rgba(0,0,0,0.6);
    :hover{
        transition: .2s linear;
        color: rgba(0,0,0,1);
    }
    @media only screen and (max-width: 620px){
        font-size: var(--text-80);
    } 
`
export const Button = styled.a`
    padding: .7rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: var(--text-90);
    color: #fff;

    @media only screen and (max-width: 620px) {
        font-size: var(--text-80);
        padding: .6rem 1rem;
    }
`