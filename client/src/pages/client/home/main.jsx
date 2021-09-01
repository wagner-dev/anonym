import { useEffect } from 'react'
import Home from './index'
import Menu from '../../../global/components/menu/main.jsx'
export default function HomePage(){

    useEffect(() => document.title = 'Anonym - home', [])
    return(
        <>
            <Menu border={true} />
            <Home />
        </>    
    )
    
}