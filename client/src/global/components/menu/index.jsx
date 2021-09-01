import { 
    MenuBody,
    Menu,
    Title,
    Content,
    Link,
    Button
} from './styled/index'
export default function MenuComponent({shadow, border}) {
    return (
        <MenuBody shadow={shadow} border={border} >
            <Menu>
                <Title href='/'> 
                    <h1>Anonym</h1>
                </Title>
                <Content>
                    <Link href="/">
                        Home
                    </Link>
                </Content>
                <Button href="/login" style={{background: '#00B0FF'}}>
                    Login
                </Button>
            </Menu>
        </MenuBody>
    )
}