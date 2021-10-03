import {
    Body
} from './styled'
import ListItems from './ListItems/index' 

export default function Activity({data, total, setLimit}){
    return (
        <Body>
            <ListItems 
            data={data}
            total={total}
            setLimit={setLimit}/>
        </Body>
    )
}