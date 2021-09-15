import {
    Body,
    Empty,
    Load,
    Talk,
    BodyTalk,
    AskTalk,
    TalkBody,
    ResponseTalk,
    ButtonSend
} from './styled/index'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'
import { formatRelative, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import { LoadMore } from './services/index'

export default function TalkComponent({ talks, load, setLimit, talksCount}){
    function Enable(e){
        // element's
        const textarea = e.target
        textarea.style.height = '30vh'
    }
    function Disable(e) {
        const textarea = e.target
        textarea.style.height = '7vh'
    }
    return(
        <Body>
                {load ? 
                <Load>
                    <img src={LoadIcon} alt="carregando..."/>
                </Load>
            : 
            <>
                {talks.length ? 
                    <TalkBody>
                        {talks.map((item, key) => {

                            const time = formatRelative(parseISO(item.createdAt), (new Date()), {locale: pt})

                            return (
                                <Talk key={key} id={item._id}>
                                    <BodyTalk>
                                        <AskTalk>
                                            <span>{item.body}</span>
                                        </AskTalk>
                                        <ResponseTalk>
                                            <textarea onBlur={Disable} onFocus={Enable} placeholder="Sua resposta">
                                            </textarea>
                                        </ResponseTalk>
                                        <ButtonSend>
                                            <input type="submit" value='Enviar' />
                                        </ButtonSend>
                                    </BodyTalk>
                                </Talk>
                            )
                        })}

                        <LoadMore
                        talksLimit={talks.length}
                        setLimit={setLimit}
                        talksCount={talksCount} />
                    </TalkBody>
                : <>vazio</>
                }
            </>
            }
        </Body>
    )
}