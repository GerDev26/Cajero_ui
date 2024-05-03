import { useContext } from 'react'
import './../assets/styles/Buttons.css'
import { KeyboardScreenContext, UserLoggedContext } from '../contexts/InputContext'
import { Link } from 'react-router-dom'

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


        <button className='btn' onClick={handleClick}>
            <svg style={{width: "60px", height: "60px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
        </button>
    )
}
export function ClearBtn({children}){

    const {setText} = useContext(KeyboardScreenContext)

    const handleClick = () => {
        setText("")
    }

    return(
        <button className='btn' onClick={handleClick}>
            <svg style={{width: "60px", height: "60px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    )
}

export function EnterBtn({children}){

    const {text} = useContext(KeyboardScreenContext)
    const {user, setUser} = useContext(UserLoggedContext)

    const handleClick = () => {
        setUser(text)
        console.log(user)
    }

    return(
        <button style={{gridRow: "3/5", gridColumn: "4/5", width: "100%", height: "100%"}} className='btn' onClick={handleClick}>
            <svg style={{width: "70x", height: "70px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
            </svg>

        </button>
    )
}