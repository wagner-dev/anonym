import { useEffect, useState } from 'react'
import {
    NotFound
} from './styled/index'
import Menu from '../../../global/components/menu/main'
import Talk from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'
import { useUser } from '../../../services/identifyUser/index'

export default function TalkPage({match: {params}}){

    const { user, setUser } = useUser()

    const [talk, setTalk] = useState({
        load: true,
        data: []
    })

    // msg
    const [response, setResponse] = useState('')
    // alert
    const [alert, setAlert] = useState({
        msg: '',
        type: 'err'
    })

    async function requestStart(){

        const token = getPersist()
    
        if(token){
            const { data, status } = await api.get(`/talk/${token}/${params._id}/indexone`)
            if(data.status === 200 && status === 200){
                setTalk(data.talk ? {data: data.talk} : [])
            }
            else{
                setTalk({isAnonymous: true})
            }
        }
        else{
            setTalk({isAnonymous: true})
        }
    }
    async function verifyResponse(){
        // reset
        setAlert({msg: '', type: 'err'})

        if(response.length >= 1){
            // reset
            setAlert({msg: '', type: 'err'})
            if(response.length <= 420){
                requestResponse({

                })
                setAlert({msg: '', type: 'err'})
            }
            else{
                setAlert({msg: 'A mensagem deve ter no máximo 420 caracteres', type: 'err'})
            }
        }
        else{
            setAlert({msg: 'A mensagem deve ter no mínimo 1 caractere', type: 'err'})
        }
    }
    async function requestResponse(){
        const token = getPersist()
        if(token){
            const dataForm = {
                token,
                body: response,
                _id: talk.data._id
            }
            const { data, status } = await api.post('/talk/response/create', dataForm)
            
            if(data.status === 200 && status === 200){
                setAlert({msg: 'Talk respondido com sucesso.', type: 'success'})
                window.location = '/perfil'
            }
            else{
                window.location = '/login'
            }
        }
        else{
            window.location = '/login'
        }
    }

    useEffect(() => {
        requestStart()
    }, [])
    return(
        <>
            <Menu border={true} />
            {talk.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/'>Voltar para o anonym</a></span>
                </NotFound>
            :
            <Talk 
                talk={talk.data}
                load={talk.load}
                response={{
                    response: response,
                    setResponse: (e) => setResponse(e),
                    verify: verifyResponse,
                    alert
                }}
                />
            }
        </>
    )
}