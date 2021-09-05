import { Switch, Route, BrowserRouter} from 'react-router-dom'

// client
    import Home from '../../pages/client/home/main.jsx'
    import Login from '../../pages/client/login/main.jsx'
    import CreateAccount from '../../pages/client/create-account/main'
    // private
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* client */}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/criar-conta" component={CreateAccount} />
                    {/* private */}
            </Switch>
        </BrowserRouter>
    )
}