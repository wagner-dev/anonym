import Talks from './components/Talks/index'
import {
    Body,
} from './styled/index'


export default function TalkComponent({ talks, load, setLimit, talksCount}){
    return(
        <Body>
            <Talks
            talks={talks}
            load={load}
            setLimit={setLimit}
            talksCount={talksCount} />
        </Body>
    )
}