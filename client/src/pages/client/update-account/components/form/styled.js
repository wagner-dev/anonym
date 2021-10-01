import styled from 'styled-components'


export const Body = styled.article`
    width: 75%;
    padding: 1rem 1rem;
    
    @media only screen and (max-width: 620px){
        width: 100%;
    }
`
export const Profile = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0rem 0rem 2rem 0rem;
`
export const ProfileTitle = styled.div`
    margin: 0rem 0rem 0rem .3rem;
    span{
        font-size: var(--text-90);
        font-weight: bold;
    }
`
export const ProfileImg = styled.div`
    width: 50px;
    height: 50px;

    img{
        height: 100%;
        width: 100%;
    }
`

export const Form = styled.form`
    width: 60%;
    margin: 1rem auto 0rem auto;
    @media only screen and (max-width: 620px){
        width: 95%;
    }

`
export const Input = styled.div`
    display: flex;
    flex-direction: column;

    span{
        font-size: var(--text-90);
    }
    span:first-child{

    }
    input{
        padding: .5rem .5rem;
        font-size: var(--text-90);
        border-radius: 4px;
        outline: none;
        border: 1px solid var(--clr-black-40);
    }

    @media only screen and (max-width: 620px) {
        input { font-size: var(--text-80) }
        span{ font-size: var(--text-80); }
    }
`
export const InputBio = styled.div`
    display: flex;
    flex-direction: column;

    span{
        font-size: var(--text-90);
    }
    span:first-child{

    }
    textarea{
        max-width: 100%;
        min-width: 100%;
        max-height: 18vh;
        min-height: 9vh;
        height: 15vh;
        padding: .8rem .5rem;
        font-size: var(--text-90);
        border-radius: 4px;
        outline: none;
        border: 1px solid var(--clr-black-40);
    }

    @media only screen and (max-width: 620px) {
        textarea { font-size: var(--text-80) }
        span{ font-size: var(--text-80); }
    }
`

export const InputSubmit = styled.div`
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    input{
        padding: .5rem 1rem;
        font-size: var(--text-90);
        outline: none;
        border: none;
        cursor: pointer;    
        background: var(--clr-primary-100);
        color: #fff;
        border-radius: 4px;
    }
    span{
        font-size: var(--text-60);
        color: red;
    }
`


export const Alert = styled.div`
    width: 100%;
    margin: 0rem 0rem 0rem 0rem;
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