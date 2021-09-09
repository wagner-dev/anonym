import styled from 'styled-components'

export const Body = styled.article`
    width: 100%;
`
export const Post = styled.div`
    padding: 0rem 1rem;
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