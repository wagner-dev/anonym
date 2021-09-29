import styled from 'styled-components'

export const Body = styled.article`
    width: 74%;
    height: 80vh;
    box-shadow: 0px 0px 6px 3px #f1f1f1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    @media only screen and (max-width: 820px){
        width: 100%;
    }
    @media only screen and (max-width: 620px){
        box-shadow: none;
    } 
`
export const Anonym = styled.div`
    margin: 0rem auto;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        font-size: var(--text-90);
    }
    img{
        width: 60%;
    }

    @media only screen and (max-width: 620px){
        span{
            font-size: var(--text-80);
        }
    }
`
export const Login = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    a:first-child{
        input{
            color: #fff;
            background: var(--clr-primary-100);
        }
    }
    a:last-child{
        input{
            border: 1px solid var(--clr-primary-100);
            color: var(--clr-primary-100);
            background: none;
        }
    }
    a{
        width: 25%;
        margin: .2rem .2rem;
        input{  
            cursor: pointer;
            width: 100%;
            border: none;
            padding: .8rem;
            border-radius: 8px;
            font-size: var(--text-90);
        }
    }


    @media only screen and (max-width: 820px){ a{ width: 30%; } }
    @media only screen and (max-width: 620px){ 
        a{
            width: 35%;
            input{
                font-size: var(--text-80);
            }    
        } 
    }
    @media only screen and (max-width: 520px){ a{ width: 45%; } }
`