import {
    Body,
    Post,
    Empty,
    Talks,
    Talk,
    StartTalk,
    ProfileTalk,
    ProfileImageTalk,
    ProfileDataTalk,
    OptionsTalk,
    OptionsImageTalk,
    BodyTalk,
    AskTalk,
    ResponseTalk,
    Load,
    LikeTalkBody
} from './styled/index'

import EmptyIcon from '../../../../../assets/svg/pages/profile/empty/index.svg'
import ProfileIcon from '../../../../../assets/img/global/profile/index.jpg'
import { formatRelative , parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR' 
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'
export default function PostComponent({ talks }){

    return(
        <Body>
            <Post>
                {!talks.load ?
                <>
                    {talks.length 
                    ? 
                    <Talks>
                        {talks.map((item, key) => {
                            const time = formatRelative(parseISO(item.createdAt), (new Date()), {locale: pt})
                            return (
                                <Talk key={key} id={item._id}>
                                    <StartTalk>
                                            <ProfileTalk>
                                                <ProfileImageTalk>
                                                    <img src={ProfileIcon} alt="foto de perfil" />
                                                </ProfileImageTalk>
                                                <ProfileDataTalk>
                                                    <span>{item.toUserId.username}</span>
                                                    <span>{time}</span>
                                                </ProfileDataTalk>
                                            </ProfileTalk>
                                            <OptionsTalk>
                                                <OptionsImageTalk>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                                                </OptionsImageTalk>
                                            </OptionsTalk>
                                    </StartTalk>
                                    <BodyTalk>
                                        <AskTalk>
                                            <span>{item.body}</span>
                                        </AskTalk>
                                        <ResponseTalk>
                                            {item.response.map((item, key) => <span id={item._id} key={key}>{item.body}</span>)}
                                        </ResponseTalk>
                                    </BodyTalk>
                                </Talk>
                            )
                        })}
                    </Talks>
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
