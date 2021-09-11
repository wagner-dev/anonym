import styled from 'styled-components'

export const Body = styled.article`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid var(--clr-black-20);
`
export const SendTalkBody = styled.div`
    margin: 0rem auto;
    width: 85%;

    @media only screen and (max-width: 620px){
        width: 100%;
    }
`
export const SendTalk = styled.div`
    width: 100%;
    textarea{
        border-radius: 8px;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        min-height: 18vh;
        border: 1px solid var(--clr-black-20);
        outline: none;
        padding: .6rem;
        font-size: var(--text-90);

        @media only screen and (max-width: 620px) {
            font-size: var(--text-80);
        }
    }
`

export const SendInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    div:first-child{
        input{
            padding: .5rem 2rem;
            border: none;
            background: var(--clr-primary-100);
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }
    }
    div:last-child{
        display: flex;
        span{
            font-size: var(--text-60);
        }
    } 

    @media only screen and (max-width: 620px){
        div:first-child{
            input{
                padding: .5rem 1rem;
            }
        }
    }

`

export const Alert = styled.div`
    display: flex;
    margin: -.4rem 0rem .5rem 0rem;
    span{
        color: ${props => props.type === 'err' ? 'red' : 'green'};
        font-size: var(--text-70);
    }
`