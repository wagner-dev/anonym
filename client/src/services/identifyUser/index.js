import { useState, useEffect, createContext, useContext } from 'react'
import api from '../api/index'
import { getPersist } from '../persist/index'
import { Route } from 'react-router-dom'

const myContext = createContext()

export const IdentifyUser = ({component: Component, ...rest}) => {
    
    const [ user, setUser ] = useState({})
    
    useEffect(() => {
        const token = getPersist()
        if(token){
            api.get(`/user/${token}/index`).then(({data, status}) => {
                if(status === 200){
                    setUser(data.user)
                }
            }).catch(() => {
                setUser({isAnonymous: true})
            })
            
        }
        else{
            setUser({isAnonymous: true})
        }

    }, [])
return(
        <Route {...rest} render={(props) => <myContext.Provider value={{user, setUser}} > <Component {...props}/> </myContext.Provider>}/>
    )
}

export const useUser = () => {
    const Context = useContext(myContext)
    if(Context){
        const { user, setUser } = Context
        return { user, setUser }
    }
}