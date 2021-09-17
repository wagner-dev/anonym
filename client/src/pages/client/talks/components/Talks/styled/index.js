import styled from 'styled-components'


export const Body = styled.article`
    width: 60%;
    margin: 0rem auto;
    box-shadow: 0px 0px 10px 5px #f1f1f1;
    border-radius: 8px;
    display: flex;

    
    @media only screen and (max-width: 920px) {
        width: 80%;
    }
    
    @media only screen and (max-width: 620px) {
        width: 100%;
        box-shadow: none;
    }
`
export const Empty = styled.div`
    width: 100%;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 50%;
    }
    span{
        margin: .5rem 0rem 0rem 0rem;
        font-size: var(--text-90);
    }





    @media only screen and (max-width: 620px) {
        img{
            width: 90%;
        }
        span{
            font-size: var(--text-80);
        }
    }
`
export const TalkBody = styled.div`
    width: 100%;
    padding: 2rem 0rem;
`
export const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 100%;
    img{
        width: 25px;
        height: 25px;
        animation: rotateXY .6s linear infinite;
    }


    @keyframes rotateXY {
        100%{
            transform: rotate(360deg);
        }
    }
`

export const Talk = styled.div`
    padding: .2rem;
    width: 90%;
    margin: 1rem auto;
    border: 1px solid #f1f1f1;
    /* padding: rem; */
    border-radius: 5px;
    height: auto !important;

    @media only screen and (max-width: 620px){
        width: 100%;
    } 
`


export const BodyTalk = styled.div`

`
export const AskTalk = styled.div`

    padding: .5rem 0rem;
    margin: .4rem 0rem .4rem 2rem;
    padding: 0rem 0rem 0rem .6rem;
    border-left: 5px solid var(--clr-black-40);
    overflow: hidden;
    text-overflow: ellipsis;
    span{
        width: 100%;
        font-size: var(--text-100);
        color: var(--clr-black-60);
    }
    @media only screen and (max-width: 620px){
        padding: 0rem 0rem 0rem .4rem;
        span{
            font-size: var(--text-90);
        }
    }
`
export const ResponseTalk = styled.div`
    width: 95%;
    margin: 1rem auto .5rem auto;

    input{
        padding: .6rem;
        width: 100%;
        border: none;
        background: rgb(243, 243, 243);
        border-radius: 8px;
        outline: none;
        max-width: 100%;
        min-width: 100%;
        height: 7vh;
        resize: none;
        cursor: pointer;
        transition: .5s;
        text-align: left;
    }
`