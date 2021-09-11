import { Switch, BrowserRouter, Route} from 'react-router-dom'


// client
    
    import { IdentifyUser } from '../../services/identifyUser/index'
    import Home from '../../pages/client/home/main.jsx'
    import Login from '../../pages/client/login/main.jsx'
    import CreateAccount from '../../pages/client/create-account/main'
    import HomeSocial from '../../pages/client/home-social/main'
    import Profile from '../../pages/client/profile/main'
    import Users from '../../pages/client/users/main'
    // private

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* client */}
                    <IdentifyUser exact path="/" component={Home}/>
                    <IdentifyUser exact path="/login" component={Login} />
                    <IdentifyUser exact path="/criar-conta" component={CreateAccount} />
                    <IdentifyUser exact path="/home" component={HomeSocial} />
                    <IdentifyUser exact path="/perfil" component={Profile} />
                    <IdentifyUser exact path="/user/:username" component={Users} />
                    {/* private */}

            </Switch>
        </BrowserRouter>
    )
}