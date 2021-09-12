
import {
    Body,
    Profile,
    Image,
    Content,
    User,
    Data,
    Bio,
    Buttons,
    Load,
    Social
} from './styled/index'
import ImageIcon from '../../../../../assets/img/global/profile/index.jpg'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'

export default function ProfileComponent({ user, controlFollows, i_user }) {

    return(
        <Body>
                <Profile>
                    <Image>
                        <img src={ImageIcon} alt="foto"/>
                    </Image>
                    <Content>

                        {Object.keys(user).length && user.username
                            ?
                            <>
                                <User>
                                    <div >
                                        <span>{user.username}</span>
                                    </div>
                                </User>
                                <Data>
                                    <div title={user.talksCount}>
                                        <span title={user.talksCount}>{user.talksCount}</span>
                                        <span>talk</span>
                                    </div>
                                    <div title={user.followers}>
                                        <span>{user.followers}</span>
                                        <span>seguidore(s)</span>
                                    </div>
                                    <div title={user.followings}>
                                        <span>{user.followings}</span>
                                        <span>seguindo</span>
                                    </div>
                                </Data>
                                <Bio>
                                    <span>{user.desc}</span>
                                </Bio>
                                <Buttons following={!user.i_follow && user.i_follow_back === null ? false : (user.i_follow_back === false ? false : true)}>
                                    {i_user.isAnonymous ? 
                                        <a href="/login">
                                            <input onClick={controlFollows} type="submit" value={!user.i_follow && user.i_follow_back === null ? 'Seguir' : (user.i_follow_back === false ? 'Seguir de volta' : 'Parar de seguir')} />
                                        </a>
                                    :
                                        <div>
                                            <input onClick={controlFollows} type="submit" value={!user.i_follow && user.i_follow_back === null ? 'Seguir' : (user.i_follow_back === false ? 'Seguir de volta' : 'Parar de seguir')} />
                                        </div>
                                    }
                                    
                                    
                                    {user.link_yt && user.link_instagram ?
                                        <Social>
                                            { user.link_instagram?
                                                <a rel="noreferrer noopener" target="_blank" href={user.link_instagram}>
                                                    <div>
                                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                                    </div>
                                                </a>
                                            :
                                                null
                                            }
                                            { user.link_instagram?
                                                <a rel="noreferrer noopener" target="_blank" href={user.link_yt}>
                                                    <div>
                                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                                    </div>
                                                </a>
                                            : 
                                                null
                                            }
                                        </Social>
                                    :
                                        <div>
                                            <input type="submit" value="sem redes sociais" />
                                        </div>
                                    }
                                </Buttons>
                            </>
                            :
                            <Load>
                                <img src={LoadIcon} alt="load"/>
                            </Load>
                            }
                    </Content>
                </Profile>
        </Body>
    )
}