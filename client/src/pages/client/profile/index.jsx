import Profile from './components/profile/index'
import Post from './components/post/index'
import {
    Body,
    ProfileBody
} from './styled/index'

export default function ProfileComponent({ user, talk }){
    
    return(
        <Body>
            <ProfileBody>
                <Profile user={user} />
                <Post talks={talk ? talk : []} />
            </ProfileBody>
        </Body>
    )
}