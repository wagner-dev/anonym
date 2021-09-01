import Router from './rotas/rotas/index'
import { GlobalStyle } from './global/styled/index'

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    )
}