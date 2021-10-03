import { useEffect, useState, useCallback } from 'react'
import {
    Body,
    Content
} from './styled/index'
import { getPersist } from '../../../services/persist/index'
import api from '../../../services/api/index'
import Options from './components/options/index'
import Form from './components/form/index'
import { useForm } from 'react-hook-form'

export default function UpdateAccountComponent({ user }){

    // validate
    const { register, handleSubmit, setValue } = useForm()


    // alerts
    const [alert, setAlert] = useState({msg: '', type: 'err'})

    async function RequestUpdate(dataForm){
        //  reset alert
        setAlert({msg: "", type: 'err'})
        try{
            const token = {headers: {Authorization: `Bearer ${getPersist()}`}}
            const {data, status} = await api.put('/user/update-account', dataForm, token)
            if(data.status === 200 && status === 200){
                setAlert({msg: data.message, type: 'success'})
            }
            else{
                setAlert({msg: data.message || "Ocorreu um erro", type: 'err'})
            }
        }
        catch{
            setAlert({msg: "Ocorreu um erro", type: 'err'})
        }
    }



    
    const addInitialValues = useCallback(() => {
        setValue("username", user.username)
        setValue("email", user.email)
        setValue("desc", user.desc)
        setValue("link", user.link)
    }, [ user, setValue ])


    useEffect(() => {
        addInitialValues()
    }, [ addInitialValues ])

    return(
        <Body>
            <Content>
                <Options />
                <Form 
                submit={RequestUpdate}
                user={user}
                alert={alert}
                register={register}
                handleSubmit={handleSubmit} />
            </Content>
        </Body>
    )
}