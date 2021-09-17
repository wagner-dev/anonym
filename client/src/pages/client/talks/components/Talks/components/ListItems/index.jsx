import { memo } from 'react'
import {
    ResponseTalk,
    Talk,
    BodyTalk,
    AskTalk,
} from '../../styled/index'

const ListItems = ({ talks}) => {
   
    return(

        <>
            {talks.map((item, key) => {

                return (
                    <a key={key} href={`/perfil/talks/responder/${item._id}`}>
                        <Talk>
                            <BodyTalk>
                                <AskTalk>
                                    <span>{item.body}</span>
                                </AskTalk>
                                <ResponseTalk>
                                    <input type="submit" value="Responder" />
                                </ResponseTalk>
                            </BodyTalk>
                        </Talk>
                    </a>
                )
            })}
        </>

    )
}

export default memo(ListItems)