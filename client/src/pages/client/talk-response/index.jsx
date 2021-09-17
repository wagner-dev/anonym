import Talks from './components/talk/index'
import {
    Body
} from './styled/index'


export default function TalkResponseComponent({ talk, load, response }){
    return(
        <Body>
            <Talks
            talk={talk}
            load={load}
            response={response}/>
        </Body>
    )
}