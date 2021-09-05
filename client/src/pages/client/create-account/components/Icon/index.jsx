import { 
    Body,
    Icon
 } from './styled'
import IconImg from '../../.././../../assets/svg/pages/create-account/welcome/index.svg'

export default function IconComponent(){
    return(
        <Body>
            <Icon src={IconImg} alt="criar conta - imagem" />
        </Body>
    )
}