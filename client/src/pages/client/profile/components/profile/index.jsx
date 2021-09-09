import { useEffect } from 'react'
import {
    Body,
    Profile,
    Image,
    Content,
    User,
    Data,
    Bio,
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
                                    <div>
                                        <span>{user.username}</span>
                                    </div>
                                    <div>
                                        <a href='/perfil/edit'><input type="submit" value="Editar" /></a>
                                    </div>
                                </User>
                                <Data>
                                    <div>
                                        <span>0</span>
                                        <span>talk</span>
                                    </div>
                                    <div>
                                        <span>{user.followers}</span>
                                        <span>seguidore(s)</span>
                                    </div>
                                    <div>
                                        <span>{user.followers}</span>
                                        <span>seguindo</span>
                                    </div>
                                </Data>
                                <Bio>
                                    <span>{user.desc}</span>
                                </Bio>
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