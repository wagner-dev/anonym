import {
    Body,
    Title,
    Content,
    Button
} from './styled/index'
export default function ContentComponent(){
    return(
        <Body>
            <Title>
                <h3>BEM-VINDO(A)!</h3>
            </Title>
            <Content>
                <p>Crie uma conta para ver o que os seus amigos estão falando e deixe-os responder às suas perguntas.</p>
            </Content>
            <Button>
                <a href="/create-account">
                    Criar conta
                </a>
                <a href="/login">
                    Login
                </a>
            </Button>
        </Body>
    )
}