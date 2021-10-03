import { useEffect, useCallback, useState } from 'react'
import HomeSocial from './index'
import Menu from '../../../global/components/menu/main'
import {
    GlobalStyle
} from './styled/'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'

export default function HomeSocialPage(){

    const [ talks, setTalks ] = useState({
        loading: true,
        data: [],
        meta: {
            total: 0
        }
    })
    // página - limit de produtos (scroll infinite)
    const [ limit, setLimit ] = useState(1)

    const RequestStart = useCallback(async () => {
        const token = getPersist()  
        if(token){
            const { data, status } = await api.get(`/user/${token}/timeline?limit=${limit}`)
            if(data.status === 200 && status === 200){
                if(!data.talks.length) window.location.href= '/search'
                setTalks({
                    data: data.talks, 
                    meta: {
                        total: data.talksCount
                    }
                })
            }
            else{

            }
        }
    }, [ limit ])
    
    useEffect(() => { 
        // title
        document.title = 'Anonym - home'
        console.log(talks.loading)
        // request
        RequestStart()
    }, [ RequestStart ])
    return(
    <>
        <GlobalStyle />
        <Menu border={true} />
        <HomeSocial 
        talks={talks.data}
        total={talks.meta.total} 
        setLimit={setLimit}
        loading={talks.loading} />
    </>
    )
}