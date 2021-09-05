import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from './components/form'
import Icon from './components/Icon/index'
import { Content } from './styled/index'
import api from '../../../services/api/index'
export default function CreateAccountComponent(){
    
    const { register, handleSubmit, formState: { errors }} = useForm()

    const [alert, setAlert] = useState({msg: '', type: 'err'})

    async function RequestLogin(form){
        // reset msg
        setAlert({msg: '', type: 'err'})
        const { data, status } = await api.post('/user/create', form)
        if(data.status === 200 && status === 200 && data.create){
            setAlert({msg: ( data.message || "Conta criada com sucesso" ), type: 'success'})
            setTimeout(() => {
                if(window.confirm("Redirecionar para página de login")){
                    window.location = '/login'
                }
            }, 1000)
        }
        else{
            setAlert({msg: ( data.message || "Ocorreu um erro"), type: 'err'})
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