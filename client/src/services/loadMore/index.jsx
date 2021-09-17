import { useEffect, useRef, useState } from 'react'
import { LoadMoreStyle } from './styled/index'
import LoadIcon from '../../assets/svg/global/load/index.svg'

export default function LoadMore({ setLimit, total, realLimit}){

    const rootRef = useRef()
    const [loadedAll, setLoadedAll] = useState(false)

    
    useEffect(() => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
        const observer = new IntersectionObserver(([entries]) => {
            if(entries.isIntersecting){
                
                if(realLimit >= total){
                    setLoadedAll(true)
                    observer.disconnect()
                }
                else{
                    setLimit(prev => prev+1)
                }
            }
    
        }, options)
        observer.observe(rootRef.current)
        
        return () => (
            observer.disconnect()
        )

        // eslint-disable-next-line
    }, [ realLimit ])


    return <>
    <LoadMoreStyle ref={rootRef} >
    {loadedAll ? 
        <span>Todos items carregandos...</span>
    : 
        <img src={LoadIcon} alt="carregando..." />
    }
    </LoadMoreStyle>
    
    </>
}