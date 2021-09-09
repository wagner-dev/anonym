import {
    Body,
    Post,
    Empty
} from './styled/index'
import EmptyIcon from '../../../../../assets/svg/pages/profile/empty/index.svg'
export default function PostComponent({posts}){
    console.log(posts)
    return(
        <Body>
            <Post>
                {posts.length 
                ? 'has posts'
                :
                <Empty>
                    <img src={EmptyIcon} alt="vazio" />
                    <span>Nenhum talk postado :(</span>
                </Empty>
                }
            </Post>
        </Body>
    )
}
