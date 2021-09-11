import { useState } from 'react'
import Profile from './components/profile/index'
import Post from './components/post/index'
import SendTalk from './components/sendTalk/index'
import {
    Body,
    ProfileBody
} from './styled/index'
import api from '../../../services/api/index'

export default function ProfileComponent({ user, talk }){
    
    const [ msg, setMsg ] = useState('')
    const [ alert, setAlert ] = useState({type: 'err', msg: ''})
    

    async function RequestSendMsg(){
        const { data, status } = await api.post(`/talk/create`, {body: msg, username: user.username})

        if(status === 200 && data.status === 200){
            setAlert({type: 'success', msg: data.message})
        }
        else{
            setAlert({type: 'err', msg: data.message})
        }
    }

    function validation(){
        if(msg.length <= 420){
            // reset alerts
            setAlert({type: 'err', msg: ''})
            if(msg.length > 0){
                RequestSendMsg()
            }
            else{
                setAlert({type: 'err', msg: 'A mensagem deve ter no mínimo 1 caractere'})
            }
            
        }
        else{
            setAlert({type: 'err', msg: 'A mensagem deve ter no máximo 420 caracteres'})
        }
    }

    return(
        <Body>
            <ProfileBody>
                <Profile user={user} />
                <SendTalk user={user} msg={msg} setMsg={(e) => setMsg(e)} validation={validation} alert={alert} />
                <Post talks={talk ? talk : []} />
            </ProfileBody>
        </Body>
    )
}