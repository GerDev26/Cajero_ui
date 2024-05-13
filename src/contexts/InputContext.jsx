import { createContext, useEffect, useState } from "react";

export const KeyboardContext = createContext()
export const LogInContext = createContext()

export function KeyboardProvider({children}){

    const [text, setText] = useState("")


    return (
    <KeyboardContext.Provider value={{text, setText}}>
    {children}
    </KeyboardContext.Provider>
    )
}

