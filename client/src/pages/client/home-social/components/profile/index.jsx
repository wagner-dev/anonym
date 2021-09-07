import {
    Body,
    Profile
} from './styled/index'
import UserIcon from '../../../../../assets/img/global/profile/index.jpg'
import UserAnonymIcon from '../../../../../assets/img/global/anonym/index.jpg'

export default function ProfileComponent({user}){
    return (
        <Body>
            <Profile>
                <img src={user.username ? UserIcon : UserAnonymIcon} alt='perfil'/>
                <span>{user.username ? user.username : 'Anônimo(a)'}</span>
            </Profile>
        </Body>
    )
}