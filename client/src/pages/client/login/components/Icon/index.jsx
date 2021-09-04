import { 
    Body,
    Icon
 } from './styled/'
import IconImg from '../../.././../../assets/svg/pages/login/welcome/index.svg'

export default function IconComponent(){
    return(
        <Body>
            <Icon src={IconImg} alt="login" />
        </Body>
    )
}