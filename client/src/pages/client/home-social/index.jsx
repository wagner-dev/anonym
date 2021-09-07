import { useUser } from '../../../services/identifyUser/index'
import Profile from './components/profile/index'
import Feed from './components/feed/index'
import FeedAnonym from './components/feed-anonym/index'

import {
    Body
} from './styled/'
export default function HomeSocialComponent(){
    const { user } = useUser()
    return(
        <>
            <Body>
                {Object.keys(user).length ? 
                <>
                    {user.isAnonymous
                    ? <FeedAnonym />
                    : <Feed />
                    }
                </>
                : null
                }
                <Profile user={user} />
            </Body>
        </>
    )
}