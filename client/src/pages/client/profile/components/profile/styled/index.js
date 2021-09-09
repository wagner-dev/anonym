import styled from 'styled-components'

export const Body = styled.section`
    width: 100%;
    /* height: 60vh; */
    /* background: red; */
`
export const Profile = styled.div`
    width: 70%;
    padding: 1rem 0rem;
    margin: 0rem auto;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dbdbdb;
`
export const Image = styled.div`
    /* width: 35%; */
    img{
        width: 160px;
        height: 160px;
    }
`
export const Content = styled.div`
    width: 50%;
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
`
export const User = styled.div`
    display: flex;
    align-items: center;
    div:first-child{
        span{
            font-size: var(--text-150);
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    div:last-child{
        input{
            padding: .3rem 1rem;
            margin: 0rem 0rem 0rem 1rem;
            font-size: var(--text-80);
            border: 1px solid #dbdbdb;
            border-radius: 4px;
            cursor: pointer;
            background: #efefef;
        }
    }
`

export const Data = styled.div`
    margin: 1.4rem 0rem 0rem 0rem;
    display: flex;
    justify-content: space-around;
    div{
        span{
            font-size: var(--text-90);
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