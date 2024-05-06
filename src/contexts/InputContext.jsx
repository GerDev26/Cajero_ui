import { createContext, useState } from "react";

export const KeyboardContext = createContext()
export const UserLoggedContext = createContext()

export function KeyboardProvider({children}){

    const [text, setText] = useState("")
    
    const [message, setMessage] = useState("Ingresa tu dni")


    return (
    <KeyboardContext.Provider value={{text, setText, message, setMessage}}>
    {children}
    </KeyboardContext.Provider>
    )
}
export function UserLoggedProvider({children}){
    const [user, setUser] = useState(null)

    return (
    <UserLoggedContext.Provider value={{user, setUser}}>
    {children}
    </UserLoggedContext.Provider>
    )
}

