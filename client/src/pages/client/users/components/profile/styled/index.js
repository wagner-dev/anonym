import styled from 'styled-components'

export const Body = styled.article`
    width: 100%;
    /* height: 60vh; */
    /* background: red; */
`
export const Profile = styled.div`
    width: 100%;
    padding: 1rem 0rem;
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
`
export const Image = styled.div`
    /* width: 35%; */
    display: flex;
    align-items: center;
    img{
        width: 100px;
        height: 100px;
    }

    @media only screen and (max-width: 620px) {
        img{
            width: 80px;
            height: 80px;
        }
    }
`
export const Content = styled.div`
    width: 65%;
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;

    /* @media only screen and (max-width: 820px){
    } */
    @media only screen and (max-width: 620px){
        width: 90%;
        padding: 0rem 1rem;
        width: 100%;
    }
`
export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div:first-child{
        span{
            font-size: var(--text-140);
            overflow: hidden;
            text-overflow: ellipsis;
        
        @media only screen and (max-width: 620px){
            font-size: var(--text-120);
        }
        }
    }
`

export const Data = styled.div`
    margin: .8rem 0rem 0rem 0rem;
    display: flex;
    justify-content: space-around;
    div{
        span{
            font-size: var(--text-90);


            @media only screen and (max-width: 620px){
                font-size: var(--text-80);
            }
        }
        span:first-child{
            font-weight: bold;
            margin: 0rem .2rem 0rem 0rem;
        }
    }
`
export const Bio = styled.div`
    margin: 1rem 0rem 0rem 0rem;
    span{
        font-size: var(--text-90);
        white-space: pre-line;
        word-wrap: break-word;

        @media only screen and (max-width: 620px){
            font-size: var(--text-80);
        }
    }
`
export const Buttons = styled.div`
    margin: .5rem 0rem 0rem 0rem;
    display: flex;
    justify-content: space-between;
    div:first-child{
        input{
            background: var(--clr-primary-100);
            color: #fff;
            border: 1px solid var(--clr-primary-100);
        }
    }
    div{
        width: 45%;
        input{
            width: 100%;
            padding: .5rem 1rem;
            font-size: var(--text-80);
            border: 1px solid #dbdbdb;
            border-radius: 4px;
            cursor: pointer;
            background: #f9f9f9;
        }
    }
`
export const Load = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
    align-items: center;
    img{
        width: 25px;
        height: 25px;
        animation: rotateXY .7s linear infinite;
    }

    @keyframes rotateXY {
        0%{
            transform: rotate(0deg);
        }   
        100%{
            transform: rotate(360deg);
        }
    }
`
export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        padding: .5rem .2rem;
        background: #f9f9f9;
        margin: 0rem .3rem;
        display: flex;
        border: 1px solid var(--clr-black-20);
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 4px;
        svg{
            width: 100%;
            height: 100%;
        }    
    }
`