import { Switch, Route, BrowserRouter} from 'react-router-dom'

// client
    import Home from '../../pages/client/home/main.jsx'
    import Login from '../../pages/client/login/main.jsx'
    // private
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* client */}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login} />
                    {/* private */}
            </Switch>
        </BrowserRouter>
    )
}