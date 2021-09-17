import { useEffect, useState } from 'react'
import {
    NotFound
} from './styled/index'
import Menu from '../../../global/components/menu/main'
import Talk from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'
import { useUser } from '../../../services/identifyUser/index'

export default function TalkPage(){

    const { user, setUser } = useUser()

    const [talks, setTalks] = useState({
        load: true,
        data: []
    })
    const [ limit, setLimit ] = useState(1)


    async function requestStart(){

        const token = getPersist()
    
        if(token){
            const { data, status } = await api.get(`/talk/${token}/index?limit=${limit}`)
            if(data.status === 200 && status === 200){
                setTimeout(() => {setTalks(data.talks ? {
                    data: data.talks,
                    talksCount: data.talksCount,
                } : [])}, 200)
            }
            else{
                setUser({isAnonymous: true})
            }
        }
        else{
            setUser({isAnonymous: true})
        }
    }
    
    useEffect(() => {
        requestStart()
    }, [ limit ])
    return(
        <>
            <Menu border={true} />
            {user.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/'>Voltar para o anonym</a></span>
                </NotFound>
            :
            <Talk 
            talks={talks.data}
            load={talks.load}
            setLimit={(e) => setLimit(e)}
            talksCount={talks.talksCount}/>
            }
        </>
    )
}