import { useEffect } from 'react'
import Menu from '../../../global/components/menu/main'
import { NotFound } from './styled/index'
import UpdateAccount from './index'
import { useUser } from '../../../services/identifyUser/index'

export default function UpdateAccountPage(){
    
    useEffect(() => document.title = 'Update Account - Anonym',[])
    const user = useUser().user


    return(
        <>
            <Menu border={true} />
            {user.isAnonymous? 
                <NotFound>
                    <h2>Esta página não está disponível.</h2>
                    <span>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <a href='/'>Voltar para o anonym</a></span>
                </NotFound>
            :
                <UpdateAccount  user={user} />
            }
        </>
    )
}