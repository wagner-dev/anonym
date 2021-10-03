import styled from 'styled-components'

export const MenuBody = styled.header`
    width: 100%;
    max-width: 100%;
    background: #fff;
    position: fixed;
    top: 0%;
    border-bottom: ${(props) => props.border ? '1px solid #f1f1f1' : 'none'};
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
        font-size: 1.8rem;
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
            font-size: var(--text-150);
        }
    }
`
export const Content = styled.div`
    display: flex;
    align-items: center;
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
    div{
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
`
export const LinkProfile = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding: .7rem 1rem;
    border-top: ${({border}) => border ? '1px solid #f1f1f1' : 'none'};
    cursor: pointer;
    svg{
        width: 12px;
        height: 12px;
    }
    span{
        margin: 0rem 0rem 0rem .4rem;
        font-size: var(--text-80);
        width: calc(100% - 12px);
    }

    :hover{
        transition: .1s linear;
        background: var(--clr-black-00);
    }
`
export const TitleProfile = styled.div`
    padding: .4rem .2rem;
    span{
        font-size: var(--text-70);
    }

`

export const BodyCard = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 999;
    div{
        position: absolute;
        top: 4.1rem;
        right: 13.5%;
        display: flex;
        flex-direction: column;
        width: 20%;
        border-radius: 5px;
        box-shadow: 0px 0px 4px 2px #f1f1f1;
        background: #fff;
        animation: started .1s linear;

        @keyframes started {
            0%{
                opacity: .2;
            }
            100%{
                opacity: 1;
            }
        }
    }
    @media only screen and (max-width: 820px) {
        div{
            width: 30%;
            right: 12%;
        }
    }
    @media only screen and (max-width: 620px) {
        div{
            width: 80%;
            right: 4%;
        }
    }
`

export const LinkIcon = styled.div`
    margin: 0rem .5rem;
    width: 20px;
    height: 20px;

    svg{
        color: var(--clr-black-40);
        width: 100%;
        height: 100%;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        padding: .2rem;
        background: red;
        color: #fff;
        font-size: var(--text-60);
        transform: translate(9px, -5px);
    }
`