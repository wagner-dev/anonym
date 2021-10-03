import styled from 'styled-components'

export const Body = styled.section`
    width: 50%;
    margin: 0rem auto;

    @media only screen and (max-width: 920px) {
        width: 60%;
    }
    @media only screen and (max-width: 720px) {
        width: 70%;
    }
    @media only screen and (max-width: 620px) {
        width: 98%;
    }
`

export const ItemUser = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    margin: .4rem 0rem;
    border: 1px solid #f1f1f1;
    > div:first-child{
        display: flex;
        align-items: center;
    }
`
export const ItemImg = styled.div`
    width: 45px;
    height: 45px;
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 620px){
        width: 40px;
        height: 40px;
    }
`
export const ItemUsername = styled.div`
    margin: 0rem 0rem 0rem 1rem;
    span{
        font-size: var(--text-90);
        font-weight: bold;
    }

    @media only screen and (max-width: 620px) {
        span{
            font-size: var(--text-80);
        }
    }
    @media only screen and (max-width: 380px) {
        margin: 0rem 0rem 0rem .5rem;
        span{
            font-size: var(--text-70);
        }
    }
`
export const ItemText = styled.div`
    margin: 0rem 0rem 0rem .5rem;
    overflow-x: hidden;
        text-overflow: ellipsis;
        /* white-space: nowrap; */
    span{
        font-size: var(--text-90);
    }

    @media only screen and (max-width: 620px) {
        span{
            font-size: var(--text-80);
        }
    }
    @media only screen and (max-width: 320px) {
        span{
            font-size: var(--text-70);
        }
    }
`

export const ItemTime = styled.div`
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span{
        color: var(--clr-black-40);
        font-size: var(--text-70);
    }

    @media only screen and (max-width: 620px) {
        span{
            font-size: var(--text-60);
        }
    }
`

export const ItemTalk = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem .5rem;
    border-radius: 10px;
    background: #fff;
    margin: .4rem 0rem;
    border: 1px solid #f1f1f1;

    > div:first-child{
        display: flex;
        align-items: center;
    }
`

export const Empty = styled.article`
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
        text-align: center;
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