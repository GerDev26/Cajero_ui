import { createContext, useState } from "react";

export const KeyboardScreenContext = createContext()

export function KeyboardScreenProvider({children}){

    const [text, setText] = useState("")
    
    const [message, setMessage] = useState("Ingresa tu dni")


    return (
    <KeyboardScreenContext.Provider value={{text, setText, message, setMessage}}>
    {children}
    </KeyboardScreenContext.Provider>
    )
}

