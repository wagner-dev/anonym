import { memo } from 'react'
import {
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
} from '../../styled/index'
import ProfileIcon from '../../../../../../../assets/img/global/profile/index.jpg'
import { formatRelative , parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR' 

function ListItems({ talks }) {
    return(
            <Talks>
                {talks.map((item, key) => {
                    const time = formatRelative(parseISO(item.response[0].createdAt), (new Date()), {locale: pt})

                    return (
                        <Talk key={key}>
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

    )
}

export default memo(ListItems)