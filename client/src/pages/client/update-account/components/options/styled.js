import styled from 'styled-components'


export const Body = styled.article`
    width: 25%;
    border-right: 1px solid var(--clr-black-20);
    
    @media only screen and (max-width: 620px) {
        display: none;
    }
`
export const Option = styled.a`
    div:first-child{
        border-bottom: 1px solid var(--clr-black-40);
        span{
            font-weight: bold;
        }
    }
    div{
        cursor: pointer;
        width: 100%;
        padding: 1rem 1rem;
        
        
        span{
            font-size: var(--text-90);
        }
    }
`