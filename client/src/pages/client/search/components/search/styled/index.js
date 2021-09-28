import styled from 'styled-components'

export const SearchBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem 0rem 0rem 0rem;
`
export const Title = styled.div`
    margin: 0rem 0rem 1rem 0rem;

    h2{
        color: var(--clr-primary-100);
        font-size: var(--text-130);
    
        
        @media only screen and (max-width: 620px){
            font-size: var(--text-120);
        }
    }
`

export const Search = styled.div`
    width: 40%;
    margin: 0rem auto;
    display: flex;
    justify-content: center;
    
    input{
        padding: 1rem;
        outline: none;
        font-size: var(--text-90);
    }
    input:first-child{
        width: 100%;
        border: 2px solid ${({err}) => err ? 'red' : 'var(--clr-black-20)'};
        border-right: none;
        border-radius: 999999999px 0px 0px 999999999px;
    }
    input:last-child{
        padding: 1rem 2rem;
        color: #fff;
        border-radius: 0px 999999999px 999999999px 0px;
        background: var(--clr-primary-100);
        border: var(--clr-primary-100);
        cursor: pointer;
    }

    @media only screen and (max-width: 900px){ width: 50%; }
    @media only screen and (max-width: 800px){ width: 60%; }
    @media only screen and (max-width: 620px){ 
        width: 90%;
        input{
            font-size: var(--text-80);
        }
        input:last-child{
            padding: 1rem 1rem;
        }
    }
    @media only screen and (max-width: 420px){ width: 96%; }
`
export const Content = styled.div`
    display: flex;
    padding: .5rem .5rem;
    flex-direction: column;
    margin: 0rem 0rem 0rem 0rem;
    width: 35%;
    height: 45vh;
    border: 1px solid #dbdbdb;
    border-radius: 4px;

    @media only screen and (max-width: 900px){ width: 45%; }
    @media only screen and (max-width: 800px){ width: 55%; }
    @media only screen and (max-width: 620px){ width: 95%; }

`
export const ContentAlert = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    span{
        font-size: var(--text-90);
    }

    @media only screen and (max-width: 620px){
        span{
            font-size: var(--text-80);
        }
    }
`

export const Pointer = styled.div`
    border: 10px solid;
    border-color: transparent transparent #dbdbdb transparent;
`

export const ContentItem = styled.a`
    display: flex;
    margin: .2rem 0rem;
    padding: .5rem;
    border-radius: 4px;
    border: 1px solid var(--clr-black-20);
`

export const ContentImage = styled.div`

    img{
        width: 45px;
        height: 45px;
    }
`

export const ContentBody = styled.div`
    margin: 0rem 0rem 0rem .8rem;
`

export const ContentUser = styled.div`
    span{
        font-size: var(--text-90);
    }

    @media only screen and (max-width){
        span{
            font-size: var(--text-80);
        }
    }
`
export const ContentBio = styled.div`
    span{
        font-size: var(--text-80);
        color: var(--clr-black-40);
    }

    @media only screen and (max-width){
        span{
            font-size: var(--text-70);
        }
    }
`