import { useContext } from 'react'
import './../assets/styles/Buttons.css'
import { KeyboardScreenContext } from '../contexts/InputContext'

export function NumberBtn({children}){

    const {text, setText} = useContext(KeyboardScreenContext)

    const handleClick = () => {
        if(text.length<8){
            setText(text + children)
        }
    }

    return(
        <button className='btn number-btn' onClick={handleClick}>{children}</button>
    )
}

export function EmptyBtn(){
    return(
        <button className='btn'></button>
    )
}

export function DeleteBtn({children}){

    const {text, setText} = useContext(KeyboardScreenContext)

    const handleClick = () => {
        setText(text.slice(0, -1))
    }

    return(
        <button style={{backgroundColor: "red"}} className='btn text-btn' onClick={handleClick}>{children}</button>
    )
}
export function ClearBtn({children}){

    const {setText} = useContext(KeyboardScreenContext)

    const handleClick = () => {
        setText("")
    }

    return(
        <button style={{backgroundColor: "yellow"}} className='btn text-btn' onClick={handleClick}>{children}</button>
    )
}

export function EnterBtn({children}){

    const {text} = useContext(KeyboardScreenContext)

    const handleClick = () => {
        alert("Tu dni es: " + text)
    }

    return(
        <button style={{backgroundColor: "green"}} className='btn text-btn' onClick={handleClick}>{children}</button>
    )
}