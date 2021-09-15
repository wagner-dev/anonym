import { useEffect, useRef, useState } from 'react'
import { LoadMoreStyle } from '../styled/index'
import LoadIcon from '../../../../../../assets/svg/global/load/index.svg'

export const LoadMore = ({ setLimit, talksCount, talksLimit}) => {
    
    const rootRef = useRef()
    const [loadedAll, setLoadedAll] = useState(false)
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        const observer = new IntersectionObserver(([entries]) => {
            if(entries.isIntersecting){
                if(talksLimit >= talksCount){
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
    }, [talksLimit])


    return <>
    <LoadMoreStyle ref={rootRef} >
    {loadedAll ? 
        <span>Todos items carregandos</span>
    : 
        <img src={LoadIcon} alt="carregando..." />
    }
    </LoadMoreStyle>
    
    </>
}