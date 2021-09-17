import {
    Body,
    Load,
    TalkBody,
    Talk,
    BodyTalk,
    AskTalk,
    ResponseTalk,
    ButtonSend,
    Title,
    Alert
} from './style/index'
import LoadIcon from '../../../../../assets/svg/global/load/index.svg'

export default function TalkComponent({load, talk, response: {response, setResponse, verify, alert}}){

    return (
        <Body>
            <Title>
                <h2>
                    {'Responder'}
                </h2>
            </Title>
                {load ? 
                <Load>
                    <img src={LoadIcon} alt="carregando..."/>
                </Load>
            : 
                <TalkBody>
                    <Talk>
                        <BodyTalk>
                            <AskTalk>
                                <span>{talk.body}</span>
                            </AskTalk>
                            <ResponseTalk>
                                <textarea onChange={e => setResponse(e.target.value)} placeholder="Sua resposta" value={response}>
                                </textarea>
                            </ResponseTalk>
                            {alert.msg.length ? 
                                <Alert type={alert.type}>
                                    <span>{alert.msg}</span>
                                </Alert>
                            : null}
                            <ButtonSend>
                                <input onClick={verify} type="submit" value='Responder' />
                            </ButtonSend>
                        </BodyTalk>
                    </Talk>
                </TalkBody>
            }
        </Body>
    )
}