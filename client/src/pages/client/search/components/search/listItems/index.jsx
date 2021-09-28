import { memo } from 'react'
import {
    Content,
    ContentAlert,
    Pointer,
    ContentItem,
    ContentBody,
    ContentImage,
    ContentUser,
    ContentBio
} from '../styled/index'
import ProfileImage from '../../../../../../assets/img/global/profile/index.jpg'

function ListItems({data}){
    return(
        <>
            <Pointer />
            <Content>
                {
                    data.length ?
                        <>
                            {data.map((item, key) => {
                                return(
                                    <ContentItem href={`/${item.username}`} key={key}>
                                        <ContentImage>
                                            <img src={item.img_profile ? item.img_profile : ProfileImage} alt="profile" />
                                        </ContentImage>
                                        <ContentBody>
                                            <ContentUser>
                                                <span>{item.username}</span>
                                            </ContentUser>
                                            <ContentBio>
                                                <span>{item.desc}</span>
                                            </ContentBio>
                                        </ContentBody>
                                    </ContentItem>
                                )
                            })}
                        </>
                    :
                        <ContentAlert>
                            <span>Nenhum usuário encontrado :(</span>
                        </ContentAlert>
                }
            </Content>
        </>
    )
}


export default memo(ListItems)