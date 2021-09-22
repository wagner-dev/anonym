export const setPersist = (value, name) => {
    localStorage.setItem(( name || "anonym-token" ), JSON.stringify(value))
}
export const getPersist = ( name ) => {
    const data = JSON.parse(localStorage.getItem((name || "anonym-token")))
    
    return (data ? data : false)
}

export const deletePersist = ({name, logout, url}) => {
    localStorage.removeItem(name || "anonym-token")

    if(logout) window.location = (url || "/welcome")
    else return true
    
}