import {
    Body,
    Empty,
    Load,
    TalkBody,
} from './styled/index'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'
import EmptyIcon from '../../../../../assets/svg/pages/talks/talks-empty/index.svg'
import  LoadMore from '../../../../../services/loadMore/index'
import ListItems from './components/ListItems/index'

export default function TalkComponent({ talks, load, setLimit, talksCount}){

    return(
        <Body>
                {load ? 
                <Load>
                    <img src={LoadIcon} alt="carregando..."/>
                </Load>
            : 
            <>
                {talks.length ? 
                    <TalkBody>
                        <ListItems Response={Response} talks={talks} />
                        <LoadMore
                        realLimit={talks.length}
                        setLimit={setLimit}
                        total={talksCount}
                         />
                    </TalkBody>
                : 
                    <Empty>
                        <img src={EmptyIcon} alt="Nenum talk :(" />
                        <span>Nenhum talk :(</span>
                        <span>Siga seus amigos para eles enviarem talks a você</span>
                    </Empty>
                }
            </>
            }
        </Body>
    )
}