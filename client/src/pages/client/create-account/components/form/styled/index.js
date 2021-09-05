import styled from 'styled-components'

export const Body = styled.article`
    width: 35%;
    height: 80vh;
    background: var(--clr-primary-180);
    border-radius: 0px 8px 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 620px){
        width: 100%;
        height: auto;
        padding: 2rem 0rem;
    }
`
export const Title = styled.div`
    width: 100%;
    margin: 1rem 0rem;
    /* :before{
        content: ' ';
        display: block;
        width: 100%;
        height: 1rem;
        background: var(--clr-primary-160);
    } */
    h2{
        font-family: 'Montserrat';
        font-size: 2.6rem;
        padding: 0rem 0rem 0rem 1rem;
    }

    @media only screen and (max-width: 620px){
        margin: .5rem 0rem;
        h2{
            font-size: 2rem;
        }
    }
`
export const Form = styled.form`
    width: 100%;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: .3rem 0rem;
    padding: .3rem;
    border-radius: 8px;
    background: #fff;
    cursor: text;
    border: ${({valid}) => valid ? '1px solid red': '1px solid #fff'};
    transition: .2s linear;
    span{
        transform: translateY(13px);
        position: absolute;
        font-weight: bold;
        font-size: var(--text-90);
        transition: .1s linear;
    }
    span.atived{
        transform: translateY(-4px);
        font-size: var(--text-70);
    }
    input{
        font-size: var(--text-90);
        padding: .8rem 0rem;
        border: none;
        background: none;
        outline: none;
    }

    @media only screen and (max-width: 620px) {
        span, input{
            font-size: var(--text-80);
        }
        span.atived{
            font-size: var(--text-60);
        }
    }
`
export const Password = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: .3rem 0rem;
    padding: .3rem;
    border-radius: 8px;
    background: #fff;
    cursor: text;
    border: ${({valid}) => valid ? '1px solid red': '1px solid #fff'};
    span{
        transform: translateY(13px);
        position: absolute;
        font-weight: bold;
        font-size: var(--text-90);
        transition: .1s linear;
    }
    span.atived{
            transform: translateY(-4px);
            font-size: var(--text-70);
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            width: calc(100% - 25px);
            font-size: var(--text-90);
            padding: .8rem 0rem;
            border: none;
            background: none;
            outline: none;
        }
        img{
            width: 20px;
            height: 20px;
            margin: 0rem 5px 0rem 0rem;
            cursor: pointer;
        }
    }
`
export const Button = styled.div`
    width: 100%;
    margin: 1rem 0rem 0rem 0rem;
    input{
        cursor: pointer;
        width: 100%;
        padding: 1rem 0rem;
        border-radius: 8px;
        background: var(--clr-primary-100);
        font-size: var(--text-90);
        color: #fff;
        outline: none;
        border: none;
        text-align: center;
    }
`
export const Link = styled.div`
    width: 100%;

    a{
        font-size: var(--text-80);
        padding: 0rem 0rem 0rem .2rem;
        text-decoration: underline;
        color: var(--clr-black-80);
    }

    @media only screen and (max-width: 620px) {
        a{
            font-size: var(--text-70);
        }
    }
`
export const Alert = styled.div`
    width: 100%;
    padding: 0rem 1rem;
    margin: 1rem 0rem 0rem 0rem;
    transition: .2s linear;
    animation: shake .5s linear;
    div{
        width: 100%;
        border-radius: 8px;
        padding: .8rem 0rem;
        background: ${(props) => props.type === 'success' ? 'var(--clr-primary-100)' : 'red'};
        text-align: center;
        span{
            font-size: var(--text-90);
            color: #fff;
            font-weight: bold;
        }
    }
    @keyframes shake {
        0%{
            transform: translateX(7px)
        }
        25%{
            transform: translateX(-7px)
        }
        50%{
            transform: translateX(7px)
        }
        75%{
            transform: translateX(-7px)
        }
        100%{
            transform: translateX(0px)
        }
    }
    @media only screen and (max-width: 620px){
        div{
            span{
                font-size: var(--text-80);
            }
        }
    }
`