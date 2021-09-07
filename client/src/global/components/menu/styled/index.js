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
export const Profile = styled.div`

    div:first-child{
        display: flex;
        align-items: center;
        img{
            border: 1px solid var(--clr-black-20);
            padding: .05rem;
            border-radius: 50%;
            width: 30px;
            height: 30px;
        }
        svg{
            width: 13px;
            color: var(--clr-black-20);
            height: 13px;
            cursor: pointer;
        }
    }
    div:last-child{
        display: none;
        position: fixed;
        width: 20%;
        transform: translate(-80%, 16px);
        border-radius: 5px;
        /* box-shadow: 0px 0px 8px 2px #f1f1f1; */
        background: #fff;
        border: 1px solid var(--clr-black-20);
        animation: started .5s linear;

        @keyframes started {
            0%{
                opacity: .2;
            }
            100%{
                opacity: 1;
            }
        }
    }
    div:last-child.atived{
        display: block;
        /* flex-direction: column; */
    }

    @media only screen and (max-width: 820px) {
        div:last-child{
            width: 30%;
        }
    }
    @media only screen and (max-width: 620px) {
        div:last-child{
            width: 80%;
        }
    }
`
export const LinkProfile = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding: .7rem 1rem;
    border-top: 1px solid #f1f1f1;
    svg{
        width: 12px;
        height: 12px;
    }
    span{
        margin: 0rem 0rem 0rem .4rem;
        font-size: var(--text-80);
        width: calc(100% - 12px);
    }
`
export const TitleProfile = styled.div`
    padding: .4rem .2rem;
    span{
        font-size: var(--text-70);
    }

`