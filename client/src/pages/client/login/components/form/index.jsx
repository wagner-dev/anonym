import { useState } from 'react'
import {
    Body,
    Title,
    Form,
    Input,
    Button,
    Password,
    Link,
    Alert
} from './styled/index'
import Visible from '../../../../../assets/svg/pages/login/visible/index.svg'
import Invisible from '../../../../../assets/svg/pages/login/invisible/index.svg'
export default function Data({form, submit, RequestLogin, errors, alert}){

    const [passVisible, setPassVisible] = useState(false)

    function TextTop(e){
        const text = e.currentTarget.children[0]
        const input = text.innerText === 'Senha' ? e.currentTarget.children[1].children[0] : e.currentTarget.children[1]
        text.classList.add('atived')
        input.focus()
    }
    function TextBottom(e){
        const text = e.currentTarget.children[0]
        const input = text.innerText === 'Senha' ? e.currentTarget.children[1].children[0].value : e.currentTarget.children[1].value
        if(!input){ 
            text.classList.remove('atived')
        }
    }
    return(
        <Body>
            <Title>
                <h2>Login</h2>
            </Title>
            {Object.keys(errors).length || alert.msg.length ? 
                <Alert type={alert.type || 'err'}>
                    <div>
                        <span>{alert.msg.length ? alert.msg : 'Campo(s) inválido(s)'}</span>
                    </div>
                </Alert>
            :
                null
            }
            <Form onSubmit={submit(RequestLogin)}>
                <Input
                    onFocus={TextTop}
                    valid={errors.username ? true : false}
                    onClick={TextTop}
                    onBlur={TextBottom}>

                    <span>Nome</span>
                    <input required minLength="2" maxLength="64"
                    {...form("username", {required: true, minLength: 2, maxLength: 64, pattern: /^[a-z0-9-_]/img})}
                    type="text"/>
                </Input>
                <Input
                    onFocus={TextTop}
                    onClick={TextTop}
                    onBlur={TextBottom}
                    valid={errors.email ? true : false}>

                    <span>Email</span>
                    <input
                    required
                    maxLength="64"
                    {...form("email", {required: true, maxLength: 64})}
                     type="email" />
                </Input>
                <Password
                 onFocus={TextTop}
                 onClick={TextTop}
                 onBlur={TextBottom}
                 valid={errors.password ? true : false}>
                    <span>Senha</span>
                    <div>
                        <input
                        required minLength="8" maxLength="64"
                        {...form("password", {required: true, minLength: 8, maxLength: 64})}
                         type={passVisible ? "text" : "password"} />
                        <img 
                        onClick={() => setPassVisible(!passVisible)}
                        src={passVisible ? Visible : Invisible}
                        alt="configuração"/>
                    </div>
                </Password>
                <Button>
                    <input type="submit" value="Entrar" />
                </Button>
                <Link>
                    <a href="/criar-conta">Criar conta</a>
                </Link>
            </Form>
        </Body>
    )
}