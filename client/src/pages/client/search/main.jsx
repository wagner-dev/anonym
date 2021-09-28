import { useEffect } from 'react'
import Menu from '../../../global/components/menu/main'
import Search from './index'

export default function SearchPage(){

    useEffect(() => { document.title = 'Search - Anonym' },[])

    return(
        <>
            <Menu border={true} />
            <Search />
        </>
    )
}