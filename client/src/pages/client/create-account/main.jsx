import { useEffect } from 'react'
import Login from './index'
import Menu from '../../../global/components/menu/main'
export default function CreateAccountPage(){
    useEffect(() => {document.title = 'Anonym - criar conta'} , [])
    return (
    <>
        <Menu border={true} />
        <Login />
    </>
    )
}