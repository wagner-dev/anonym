import Menu from '../../../global/components/menu/main'
import { useEffect, useState } from 'react'
import Profile from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'

export default function ProfilePage(){
    const [user, setUser] = useState({})

    useEffect(() => {
        const token = getPersist()
        if(token){
            api.get(`/user/${token}/indexfull`).then(({ data, status }) => {
                if(status === 200, data.status === 200){
                    setUser(data.user)
                }
                else{
                    window.location = '/home'
                }
            })
        }
    }, [])

    return(
        <>
            {user.username ? 
            <>
                <Menu border={true} />
                <Profile user={user} />
            </>
            : null
            }        
        </>
    )
}