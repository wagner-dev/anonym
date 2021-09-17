import {
    Body,
    Post,
    Empty,
    Load,
} from './styled/index'

import EmptyIcon from '../../../../../assets/svg/pages/profile/empty/index.svg'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'
import ListItems from './components/ListItems/index'
import LoadMore from '../../../../../services/loadMore/index'

export default function PostComponent({ talks, setLimit, total }){

    return(
        <Body>
            <Post>
                {!talks.load ?
                <>
                    {talks.length 
                    ? 
                    <>
                        <ListItems talks={talks} />
                        <LoadMore 
                        total={total}
                        setLimit={setLimit}
                        realLimit={talks.length} />
                    </>
                    :
                    <Empty>
                        <img src={EmptyIcon} alt="vazio" />
                        <span>Nenhum talk respondido :(</span>
                    </Empty>
                    }
                </>
                : 
                <Load>
                    <img src={LoadIcon} alt="carregando..."/>
                </Load>
                }
            </Post>
        </Body>
    )
}
