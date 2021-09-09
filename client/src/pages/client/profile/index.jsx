import Profile from './components/profile/index'
import Post from './components/post/index'
import {
    Body,
    ProfileBody
} from './styled/index'

export default function ProfileComponent({ user }){
    return(
        <Body>
            <ProfileBody>
                <Profile user={user} />
                <Post posts={user.posts ? user.posts : []} />
            </ProfileBody>
        </Body>
    )
}