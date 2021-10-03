import { memo, Fragment } from 'react'
import {
    ItemUser,
    ItemImg,
    ItemUsername,
    ItemText,
    ItemTime,
    ItemTalk
} from '../styled'
import ProfileIcon from '../../../../../../assets/img/global/profile/index.jpg'
import { formatDistanceToNow, parseISO} from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import LoadMore from '../../../../../../services/loadMore/index'

function ListItems({ data, setLimit, total}) {

    return(
        <>
            {data.map((item, key) => {
                const time = formatDistanceToNow(parseISO(item.createdAt || item.UserId.createdAt), {locale: pt})
                return <Fragment key={key}>
                    {item.UserId ? 
                        <a href={'/'+item.UserId.username}><ItemUser>
                            <div>
                                <ItemImg>
                                    <img src={item.img_profile ? item.img_profile : ProfileIcon} alt="perfil"/>
                                </ItemImg>
                                <ItemUsername>
                                    <span>{item.UserId.username}</span>
                                </ItemUsername>
                                <ItemText>
                                    <span>começou a seguir você.</span>
                                </ItemText>
                            </div>
                            <ItemTime>
                                <span>{time}</span>
                            </ItemTime>
                        </ItemUser></a>
                    :
                        <a href={`/profile/talks/answer/${item._id}`}><ItemTalk>
                            <div>
                                <ItemText>
                                    <span>Alguém mandou uma talk a você: "{item.body}"</span>
                                </ItemText>
                            </div>
                            <ItemTime>
                                <span>{time}</span>
                            </ItemTime>
                        </ItemTalk></a>
                    }
                </Fragment>
            })}
            <LoadMore 
            setLimit={setLimit}
            realLimit={data.length}
            total={total} />
        </>
    )
}


export default memo(ListItems)