import { useEffect, useState, useCallback } from 'react'
import Menu from '../../../global/components/menu/main'
import { NotFound } from './styled/index'
import Profile from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'
import { useUser } from '../../../services/identifyUser/index'

export default function ProfilePage({ match }){

    const i_user = useUser().user

    const [user, setUser] = useState({})
    const [talk, setTalk] = useState({load: true})

    const [limit, setLimit] = useState(1)

    const requestStart = useCallback(async() => {

        const token = getPersist() ? getPersist() : false

        api.get(`/user/${match.params.username}/${token}/data-user?limit=${limit}`).then(({ data, status }) => {
            if(status === 200 && data.status === 200){
                document.title = `${data.user.username ? data.user.username : 'Perfil'} - Anonym`
                setUser(data.user ? data.user : {})
                setTimeout(() => {
                    setTalk(data.user.talks ? data.user.talks : {})
                }, 200)
            }
            else{
                setUser({isAnonymous: true})
            }
        })
    }, [limit, match.params.username])

    useEffect(() => {
        requestStart()
    }, [requestStart])

    return(
        <>
            <Menu border={true} />
            {user.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/home'>Voltar para o anonym</a></span>
                </NotFound>
            :
            <Profile
            user={user}
            talk={talk}
            update={requestStart}
            i_user={i_user}
            setLimit={setLimit} />
            }
        </>
    )
}