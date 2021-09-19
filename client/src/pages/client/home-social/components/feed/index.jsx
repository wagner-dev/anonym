import {
    Body,
    Load
} from './styled/index'
import ListItems from './components/ListItems/index'
import LoadMore from '../../../../../services/loadMore/index'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'

export default function FeedComponent({ talks, setLimit, total, loading }){
    
    return (
        <Body>
            {loading ? 
                <Load>
                    <img src={LoadIcon} alt="carregando..." />
                </Load>
            :
            <>
                <ListItems talks={talks} />
                <LoadMore setLimit={setLimit} total={total} realLimit={talks.length} />
            </>
            }            
        </Body>
    )
}