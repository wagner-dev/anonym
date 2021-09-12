import Menu from '../../../global/components/menu/main'
import { NotFound } from './styled/index'
import { useEffect, useState } from 'react'
import Profile from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'
import { useUser } from '../../../services/identifyUser/index'

export default function ProfilePage({ match }){

    const i_user = useUser().user

    const [user, setUser] = useState({})
    const [talk, setTalk] = useState({load: true})

    async function requestStart(){

        const token = getPersist()

        api.get(`/user/${match.params.username}/${ (token || false) }/data-user`).then(({ data, status }) => {
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
    }

    useEffect(() => {
        requestStart()
    }, [match.params.username])

    return(
        <>
            <Menu border={true} />
            {user.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/home'>Voltar para o anonym</a></span>
                </NotFound>
            :
            <Profile user={user} talk={talk} update={requestStart} i_user={i_user} />
            }
        </>
    )
}