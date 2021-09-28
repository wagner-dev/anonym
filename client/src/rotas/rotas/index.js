import { Switch, BrowserRouter } from 'react-router-dom'


// client
    
    import { IdentifyUser } from '../../services/identifyUser/index'
    import Home from '../../pages/client/home/main.jsx'
    import Login from '../../pages/client/login/main.jsx'
    import CreateAccount from '../../pages/client/create-account/main'
    import HomeSocial from '../../pages/client/home-social/main'
    import Profile from '../../pages/client/profile/main'
    import Users from '../../pages/client/users/main'
    import Talks from '../../pages/client/talks/main'
    import TalksResponse from '../../pages/client/talk-response/main'
    import Search from '../../pages/client/search/main'
    // private

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* client */}
                    <IdentifyUser exact path="/" component={HomeSocial} />
                    <IdentifyUser exact path="/welcome" component={Home}/>
                    <IdentifyUser exact path="/login" component={Login} />
                    <IdentifyUser exact path="/search" component={Search} />
                    <IdentifyUser exact path="/create-account" component={CreateAccount} />
                    <IdentifyUser exact path="/profile" component={Profile} />
                    <IdentifyUser exact path="/:username" component={Users} />
                    <IdentifyUser exact path="/profile/talks" component={Talks} />
                    <IdentifyUser exact path="/profile/talks/answer/:_id" component={TalksResponse} />

                    {/* private */}

            </Switch>
        </BrowserRouter>
    )
}