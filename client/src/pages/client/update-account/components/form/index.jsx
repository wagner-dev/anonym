import {
    Body,
    Profile,
    ProfileTitle,
    ProfileImg,
    Form,
    Input,
    InputBio,
    InputSubmit,
    Alert
} from './styled'
import ProfileIcon from '../../../../../assets/img/global/profile/index.jpg'
export default function FormComponent({ user, submit, alert, register, handleSubmit }){

    return(
        <Body>
            <Profile>
                <ProfileImg>
                    <img src={user.img_profile ? user.img_profile : ProfileIcon} alt="perfil"/>
                </ProfileImg>
                <ProfileTitle>
                    <span>{user.username}</span>
                </ProfileTitle>
            </Profile>
            <Form onSubmit={handleSubmit(submit)} >
                { alert.msg.length ?
                        <Alert type={alert.type}>
                            <div>
                                <span>{alert.msg}</span>
                            </div>
                        </Alert>
                    :
                        null
                }
                <Input>
                    <span>Username</span>
                    <input 
                    {...register("username", {required: true, minLength: 2, maxLength: 64, pattern: /^[A-Za-z0-9-_.]+$/img})}
                    type="text"
                    required
                    maxLength="64"
                    minLength="2"
                    placeholder="Digite seu username" />
                </Input>
                <Input>
                    <span>Email</span>
                    <input
                    required
                    maxLength="64"
                    {...register("email", {required: true, maxLength: 64})}
                    type="email"
                    placeholder="Digite seu email" />
                </Input>
                <InputBio>
                    <span>Descrição</span>
                    <textarea
                    required
                    maxLength="140"
                    minLength="1"
                    {...register("desc", {required: true, minLength: 1, maxLength: 140})}
                    placeholder="Digite sua descrição/biografia" />
                </InputBio>
                <Input>
                    <span>Link</span>
                    <input 
                    {...register("link", {required: false, minLength: 1, maxLength: 140})}
                    placeholder="https://example.com"/>
                </Input>
                <InputSubmit>
                    <input type="submit" value="Atualizar" />
                    <span>Você pode alterar o seu nome apenas uma vez a cada 30 dias.</span>
                </InputSubmit>
            </Form>
        </Body>
    )
}