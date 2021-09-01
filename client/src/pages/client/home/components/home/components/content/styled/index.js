import styled from 'styled-components'

export const Body = styled.article`
    width: 40%;
    padding: 2rem 1rem;
    border-radius: 8px;
    box-shadow: 0px 0px 30px 10px #f1f1f1;

    @media only screen and (max-width: 620px){
        width: 95%;
        padding: 1rem .5rem;
        margin: 1rem 0rem 0rem 0rem;
    }
`
export const Title = styled.div`
    h3{
        font-size: 3rem;
        font-family: 'Kanit';
        font-weight: bold;
        white-space: nowrap;
        width: 100%;
        overflow-x: hidden;
        text-overflow: ellipsis;
        
        @media only screen and (max-width: 900px) {
            font-size: 2.5rem;
        }
        @media only screen and (max-width: 600px) {
            font-size: 2rem;
        }
    }
`
export const Content = styled.div`
    p{
        font-size: var(--text-110);
        
        @media only screen and (max-width: 620px){
            font-size: var(--text-90);
        }
    }
`
export const Button = styled.div`
    margin: 1rem 0rem 0rem 0rem;
    display: flex;
    justify-content: space-around;
    a{
        width: 45%;
        text-align: center;
        border-radius: 8px;
        font-size: var(--text-90);
        padding: 1rem 1.5rem;
    }
    a:first-child{
        box-shadow: 0px 0px 10px 1px #65ceff;
        color: #fff;
        background: var(--clr-primary-100);
        animation: shake 2s infinite linear ;
        @keyframes shake {
            0%{
                transform: scale(0.9);
            }
            50%{
                transform: scale(1);
            }
            100%{
                transform: scale(.9);
            }
        }
    }
    a:last-child{
        border: 1px solid var(--clr-primary-100);
        color: var(--clr-primary-100);
    }
    @media only screen and (max-width: 620px){
        flex-direction: column;
        a{
            width: 100%;
            margin: .1rem;
            font-size: var(--text-80);
        }
        a:last-child{
            transform: scale(.9);
        }
    }
`