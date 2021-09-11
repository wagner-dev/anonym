import {
    Body,
    SendTalkBody,
    SendTalk,
    SendInput,
    Alert
} from './styled/index'
// import LoadIcon from '../../../../../assets/svg/global/load/index.svg'

export default function SendTalkComponent({alert, user, msg, setMsg, validation}) {

    return(
        <Body>
            <SendTalkBody>
                <SendTalk>
                    <textarea minLength="1" maxLength="420"  value={ msg } onChange={(e) => setMsg(e.target.value)} placeholder={`Enviar um talk ${user.username ? 'para '+user.username : ''}`} />
                </SendTalk>
                { alert.msg.length 
                ?
                    <Alert type={alert.type}>
                        <span>{alert.msg}</span>
                    </Alert>
                : 
                    null
                }
                <SendInput>
                    <div>
                        <input onClick={validation} type="submit" value="Enviar" />
                    </div>
                    <div>
                        <span>Sua mensagem é anônima.</span>
                    </div>
                </SendInput>
            </SendTalkBody>
        </Body>
    )
}