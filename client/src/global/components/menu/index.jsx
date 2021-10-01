import { useState} from 'react'
import { 
    MenuBody,
    Menu,
    Title,
    Content,
    Link,
    Button,
    Profile,
    LinkIcon,
    // TitleProfile
} from './styled/index'

import { useUser } from '../../../services/identifyUser/index'
import ProfileIcon from '../../../assets/img/global/profile/index.jpg'
import SettingsCard from './components/settings/index'

export default function MenuComponent({shadow, border, home}) {
    const { user } = useUser()

    const [ settingsAtived, setSettingsAtived ] = useState(false)

    return (
        <MenuBody shadow={shadow} border={border} >
            <Menu>
                <Title href={user.isAnonymous ? '/welcome' : '/'}> 
                    <h1>Anonym</h1>
                </Title>
                <Content>
                    {user.isAnonymous ?
                        <>
                            <a href="/search">
                                <LinkIcon>                          
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                </LinkIcon>
                            </a>
                        </>
                    :
                        <>
                            {home &&
                                <Link href="/">
                                    Home
                                </Link>
                            }
                            <a href="/search">
                                <LinkIcon>                          
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                </LinkIcon>
                            </a>
                            <a href="/profile/activity">
                                <LinkIcon>                                                  
                                    <span>{user.activity >= 100 ? '99+' : (user.activity ? user.activity : '0')}</span>
                                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
                                </LinkIcon>
                            </a>
                        </>
                    }
                </Content>
                { Object.keys(user).length ?
                <>
                {
                    user.isAnonymous ?
                        <Button href="/login" style={{background: '#00B0FF'}}>
                            Login
                        </Button>
                    : 
                        null
                }
                {
                    user.username ?
                        <>
                        <Profile>
                            <div onClick={() => setSettingsAtived(prev => !prev)}>
                                <img src={ProfileIcon} alt="perfil"/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                            </div>

                            {settingsAtived && <SettingsCard cancel={() => setSettingsAtived(false)} /> }
                        </Profile>
                        </>
                    : 
                        null
                }
                </>
                : 
                    '...'
                }
            </Menu>
        </MenuBody>
    )
}