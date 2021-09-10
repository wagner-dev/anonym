import {
    Body,
    Anonym,
    Login
} from './styled/index'
import Load from '../../../../../assets/svg//pages/home-social/anonym/index.svg'

export default function FeedComponent(){
    return (
        <Body>
            <Anonym>
                <img alt="carregando..." src={Load}/>
                <span>Você está no modo anônimo</span>
            </Anonym>
            <Login>
                <a href='/login'>
                    <input type="submit" value="Login" />
                </a>
                <a href='/criar-conta'>
                    <input type="submit" value="Criar conta" />
                </a>
            </Login>
        </Body>
    )
}