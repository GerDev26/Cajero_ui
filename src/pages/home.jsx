
import { KeyboardScreen, MainScreen } from "../components/Screens";
import { Keyboard, KeyboardInput } from "../components/Keyboard";
import { KeyboardContext, KeyboardProvider } from "../contexts/InputContext";
import './../assets/styles/pages.css'
import { useContext, useEffect, useState } from "react";

export function Home(){

    const {text} = useContext(KeyboardContext)

    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() =>{
        console.log(text ==42)
        if(text == 42312169){
            setIsCorrect(!isCorrect)
        }
    }, [text])

    return(
        <>
            <KeyboardScreen>
                <Keyboard/>
            </KeyboardScreen>
            <MainScreen>
                {isCorrect ? "Ingresaste" : <KeyboardInput/>}
            </MainScreen>
        </>
    )
}