
import {
    Body,
    Profile,
    Image,
    Content,
    User,
    Data,
    Bio,
    Buttons,
    Load
} from './styled/index'
import ImageIcon from '../../../../../assets/img/global/profile/index.jpg'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'

export default function ProfileComponent({ user }) {
    
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
                                <Buttons>
                                    <div>
                                        <a href='/profile/talks'><input type="submit" value="Talks" /></a>
                                    </div>
                                    <div>
                                        <a href='/profile/edit'><input type="submit" value="Editar" /></a>
                                    </div>
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