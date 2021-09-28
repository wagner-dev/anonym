import { memo, Fragment } from 'react'
import {
    Content,
    ContentAlert,
    Pointer,
    ContentItem,
    ContentBody,
    ContentImage,
    ContentUser,
    ContentBio,
    Load
} from '../styled/index'
import ProfileImage from '../../../../../../assets/img/global/profile/index.jpg'
import LoadIcon from '../../../../../../assets/svg/global/load/index.svg'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'



function ListItems({data, load}){
        
    const Row = ({index, style}) => {
        const item = data[index]    
        return(
            <div style={style}>
                <ContentItem href={`/${item.username}`}>
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
            </div>
        )   
    }

    return(
        <>
            <Pointer />
            <Content>
                {
                load.load ?
                    <Load>
                        <img src={LoadIcon} alt="carregando..."/>
                    </Load>
                :
                    <>
                    {
                        data.length ?
                            <AutoSizer style={{width: '100%'}} >
                                {({height}) => {
                                    return(
                                        <FixedSizeList
                                        height={height}
                                        itemSize={68}
                                        itemCount={data.length}
                                        width={'100%'}
                                        >
                                            {Row}
                                        </FixedSizeList>
                                    )
                                }}
                            </AutoSizer>


                        :
                            <ContentAlert>
                                <span>{load.initial ? 'esperando...' : 'Nenhum usuário encontrado :('}</span>
                            </ContentAlert>
                    }
                    </>
                }
            </Content>
        </>
    )
}


export default memo(ListItems)