import { useEffect } from 'react'
import {
    GlobalStyle,
    NotFound
} from './styled/index'
import Menu from '../../../global/components/menu/main'
import Activity from './index'
import {useUser} from '../../../services/identifyUser/index'
export default function ActivityPage(){

    const { user } = useUser()

    useEffect(() => { document.title = 'Sua atividade - Anonym' },[])

    return(
        <>
            <GlobalStyle />
            <Menu border={true} />
            {user.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/'>Voltar para o anonym</a></span>
                </NotFound>
            :
            <Activity />
            }
        </>
    )
}