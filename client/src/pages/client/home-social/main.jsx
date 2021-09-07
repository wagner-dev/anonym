import { useEffect } from 'react'
import HomeSocial from './index'
import Menu from '../../../global/components/menu/main'
import {
    GlobalStyle
} from './styled/'

export default function HomeSocialPage(){
    useEffect(() => { document.title = 'Anonym - home'}, [])
    return(
    <>
        <GlobalStyle />
        <Menu border={true} />
        <HomeSocial />
    </>
    )
}