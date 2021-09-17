import { useState } from 'react'
import Profile from './components/profile/index'
import Post from './components/post/index'
import SendTalk from './components/sendTalk/index'
import {
    Body,
    ProfileBody
} from './styled/index'
import { getPersist } from '../../../services/persist/index'
import api from '../../../services/api/index'

export default function ProfileComponent({ user, talk, update, i_user }){
    
    const [ msg, setMsg ] = useState('')
    const [ alert, setAlert ] = useState({type: 'err', msg: ''})
    

    async function RequestSendMsg(){
        const { data, status } = await api.post(`/talk/create`, {body: msg, username: user.username})

        if(status === 200 && data.status === 200){
            setMsg('')
            setAlert({type: 'success', msg: data.message})
        }
        else{
            setAlert({type: 'err', msg: data.message})
        }
    }

    function validation(){
        setAlert({type: 'err', msg: ''})
        if(msg.length <= 420){
            // reset alerts
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

    async function controlFollows(){
        const token = getPersist() ? getPersist() : 'false'

        if(user.i_follow) await unfollow({token, username: user.username})
        else await follow({token, username: user.username})

        update()
    }
    async function follow(data){
        await api.post('/user/follow', data)
    }
    async function unfollow(data){
        await api.post('/user/unfollow', data)
    }

    return(
        <Body>
            <ProfileBody>
                <Profile user={user} controlFollows={controlFollows} i_user={i_user} />
                <SendTalk user={user} msg={msg} setMsg={(e) => setMsg(e)} validation={validation} alert={alert} />
                <Post talks={talk ? talk : []} />
            </ProfileBody>
        </Body>
    )
}