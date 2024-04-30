import { createContext, useState } from "react";

export const KeyboardScreenContext = createContext()
export const UserLoggedContext = createContext()

export function KeyboardScreenProvider({children}){

    const [text, setText] = useState("")
    
    const [message, setMessage] = useState("Ingresa tu dni")


    return (
    <KeyboardScreenContext.Provider value={{text, setText, message, setMessage}}>
    {children}
    </KeyboardScreenContext.Provider>
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

