import styled from 'styled-components'


export const LoadMoreStyle = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 1rem 0rem;

span{
    font-size: var(--text-90);
}

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

@media only screen and (max-width: 620px) {
    span{
        font-size: var(--text-80);
    }
}
`