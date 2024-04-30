import { useContext } from "react"
import { UserLoggedContext } from "../contexts/InputContext"

export function Hola(){
    const {user} = useContext(UserLoggedContext)
    return(
        <h1>Hola {user}</h1>
    )
}