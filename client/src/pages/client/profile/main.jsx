import { useEffect, useState, useCallback} from 'react'
import Menu from '../../../global/components/menu/main'
import { NotFound } from './styled/index'
import Profile from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'

export default function ProfilePage(){
    const [user, setUser] = useState({})
    const [talk, setTalk] = useState({load: true})
    // page - limite de produtos por scroll ( limit * 15 )
    const [limit, setLimit] = useState(1)


    const RequestStart = useCallback(async () =>{
        
        const token = getPersist()
        if(token){
            api.get(`/user/${token}/indexfull?limit=${limit}`).then(({ data, status }) => {
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
        else{
            document.title = 'Página não encontrada - Anonym'
            setUser({isAnonymous: true})
        }
    }, [ limit ])

    useEffect(() => {
        RequestStart()
    }, [ RequestStart ])

    return(
        <>
            <Menu border={true} />
            {user.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/'>Voltar para o anonym</a></span>
                </NotFound>
            :
            <Profile user={user} talk={talk} setLimit={setLimit} />
            }
        </>
    )
}