import {useState} from 'react'
import {
    Body,
} from './styled/index'
import Search from './components/search/index'
import api from '../../../services/api/index'
import { getPersist } from '../../../services/persist/index' 

export default function SearchComponent(){
    const [data, setData] = useState([])

    async function RequestSearch(value){
        const token = getPersist()
        const { data, status } = await api.get(`/user/search?q=${value}`, {headers: {Authorization: `Bearer ${token}`}})
        if(data.status === 200 && status === 200){
            setData(data.result ? data.result : [])
        }
    }

    return(
        <Body>  
            <Search 
            data={data}
            request={RequestSearch}
             />
        </Body>
    )
}