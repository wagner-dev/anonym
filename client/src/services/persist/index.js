export const setPersist = (value, name) => {
    localStorage.setItem(( name || "anonym-token" ), JSON.stringify(value))
}