import { useContext } from 'react'
import './../assets/styles/Screens.css'
import { KeyboardScreenContext } from '../contexts/InputContext'


export function MainScreen({children}){
    return(
        <div className='main-screen'>
            <p style={{fontSize: "40px", marginBottom: "30px"}}>INGRESA TU DNI PARA CONTINUAR</p>
            {children}

        </div>
    )
}
export function KeyboardScreen(){
    const { text } = useContext(KeyboardScreenContext)

    return(
        <>
            <div className="keyboard-screen">{text}</div>
        </>
    )
}
