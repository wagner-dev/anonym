import { useEffect, useState, useCallback } from 'react'
import {
    NotFound
} from './styled/index'
import Menu from '../../../global/components/menu/main'
import Talk from './index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'

export default function TalkPage({match: {params}}){
    useEffect(() => { document.title = 'Responder talk - Anonym' })

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
                window.location = '/profile'
            }
            else if(data.status === 422 && status === 200){
                setAlert({msg: data.message || 'Ocorreu um erro', type: 'err'})
            }
            else{
                window.location = '/login'
            }
        }
        else{
            window.location = '/login'
        }
    }
    
    const requestStart = useCallback( async() => {

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
    }, [ params._id ])

    useEffect(() => {
        requestStart()
    }, [ requestStart ])
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