import { useEffect, useCallback } from 'react'
import HomeComponent from './components/home/index'
import { useUser } from '../../../services/identifyUser/index'
export default function Home(){

    const { user } = useUser()

    const IsAnonymous = useCallback(() => {
        if(Object.keys(user).length){
            if(user.username){
                window.location = '/'
            }
        }
    }, [ user ])

    useEffect(() => {
        IsAnonymous()
    }, [ IsAnonymous ])
    
    return (
        <>
            <HomeComponent />
        </>
    )
}