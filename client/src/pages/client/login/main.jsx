import { useEffect } from 'react'
import Login from './index'
import Menu from '../../../global/components/menu/main'
export default function LoginPage(){
    useEffect(() => {document.title = 'Anonym - login'} , [])
    return (
    <>
        <Menu border={true} />
        <Login />
    </>
    )
}