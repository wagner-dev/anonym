import { useEffect } from 'react'
import HomeComponent from './components/home/index'
import { useUser } from '../../../services/identifyUser/index'
export default function Home(){

    const { user } = useUser()

    useEffect(() => {
        if(Object.keys(user).length){
            if(user.username){
                window.location = '/home'
            }
        }
    }, [user])
    
    return (
        <>
            <HomeComponent />
        </>
    )
}