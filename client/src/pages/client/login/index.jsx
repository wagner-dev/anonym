import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from './components/form/'
import Icon from './components/Icon/index'
import { Content } from './styled/index'
import { setPersist } from '../../../services/persist/index'
import api from '../../../services/api/index'
export default function LoginComponent(){
    
    const { register, handleSubmit, formState: { errors }} = useForm()

    const [alert, setAlert] = useState({msg: '', type: 'err'})

    async function RequestLogin(form){
        // reset msg
        setAlert({msg: '', type: 'err'})
        
        const { data, status } = await api.post('/user/check', form)
        if(data.status === 200 && status === 200 && data.login === true){
            setPersist(data.token)
            setAlert({msg: (data.message || "Sucesso."), type: 'success'})
            window.location = '/'
        }
        else{
            setAlert({msg: (data.message || "Ocorreu um erro"), type: 'err'})
        }
    } 
    return(
        <>
            <Content>
                <Icon />
                <Form
                form={register}
                submit={handleSubmit}
                RequestLogin={RequestLogin}
                errors={errors}
                alert={alert}
                />
            </Content>
        </>
    )
}