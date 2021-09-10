import styled from 'styled-components'

export const Body = styled.article`
    width: 100%;
`
export const Post = styled.div`
    padding: 0rem 1rem;

    @media only screen and (max-width: 620px){
        padding: 0rem .8rem;
    } 

`
export const Empty = styled.div`
    padding: 2rem 0rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
        width: 50%;
    }
    span{
        font-size: var(--text-90);
    }
`
export const Talks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;

    @media only screen and (max-width: 620px){
        padding: 1rem 0rem;
    } 

`
export const Talk = styled.li`
    width: 85%;
    list-style: none;
    margin: 0.4rem 0rem;
    border: 1px solid #f1f1f1;
    /* padding: rem; */
    border-radius: 5px;

    @media only screen and (max-width: 620px){
        width: 100%;
    } 
`
export const StartTalk = styled.div`
    padding: .5rem 1rem .5rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
`
export const ProfileTalk = styled.div`
    display: flex;
    align-items: center;
`
export const ProfileImageTalk = styled.div`
    width: 35px;
    height: 35px;

    img{
        width: 100%;
        height: 100%;
    }
`
export const ProfileDataTalk = styled.div`
    margin: 0rem 0rem 0rem .6rem;
    display: flex;
    flex-direction: column;
    span:first-child{
        font-size: var(--text-90);
    }
    span:last-child{
        font-size: var(--text-70);
        color: var(--clr-black-40);
    }

    @media only screen and (max-width: 620px){
        span:first-child{
            font-size: var(--text-80);
        }
        span:last-child{
            font-size: var(--text-60);
        }
    } 

`
export const OptionsTalk = styled.div`
    display: flex;
    align-items: center;
`
export const OptionsImageTalk = styled.div`
    svg{
        cursor: pointer;
        width: 15px;
        height: 15px;
    }
`
export const BodyTalk = styled.div`

`
export const AskTalk = styled.div`
    padding: .5rem 0rem;
    margin: .4rem 0rem .4rem 3.3rem;
    padding: 0rem 0rem 0rem .6rem;
    border-left: 5px solid var(--clr-black-40);
    span{
        font-size: var(--text-100);
        color: var(--clr-black-60);
    }
    @media only screen and (max-width: 620px){
        margin: .4rem 0rem .4rem 3rem;
        padding: 0rem 0rem 0rem .4rem;
        span{
            font-size: var(--text-90);
        }
    }
`
export const ResponseTalk = styled.div`
    padding: .2rem .6rem .8rem .6rem;
    span{
        font-size: var(--text-90);

        @media only screen and (max-width: 620px){
            font-size: var(--text-80);
        }
    }
`
export const Load = styled.div`
    display: 100%;
    padding: 5rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 25px;
        height: 25px;
        animation: rotateXY .7s linear infinite;
    
    
        @keyframes rotateXY {
            0%{
                transform: rotate(0deg)
            }
            100%{
                transform: rotate(360deg);
            }
        }
    }
`