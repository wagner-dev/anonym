import { useState, useEffect, useCallback} from 'react'
import {
    Body,
} from './styled/index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index'
import Activity from './components/activity/index'

export default function ActivityComponent(){

    const [data, setData] = useState({data: [], meta: {total: 0}})

    // page -scroll infinite
    const [limit, setLimit] = useState(1)

    const RequestStart = useCallback(async () => {
        const token = getPersist()
        const {data, status} = await api.get(`/user/notifications?limit=${limit}`, {headers: {Authorization: `Bearer ${token}`}})
        if(data.status === 200 && status === 200){
            setData({data: data.body, meta: {total: data.meta.total}})
        }
    }, [ limit ])


    useEffect(() => {
        RequestStart()
    }, [ RequestStart ])

    return(
        <Body>  
            <Activity 
            data={data.data}
            total={data.meta.total}
            setLimit={setLimit}/>
        </Body>
    )
}