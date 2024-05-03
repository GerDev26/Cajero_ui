import { useContext } from 'react'
import './../assets/styles/Screens.css'
import { KeyboardScreenContext } from '../contexts/InputContext'


export function MainScreen({children}){
    return(
        <div className='main-screen'>
            
            {children}

        </div>
    )
}
export function KeyboardScreen(){
    const { text } = useContext(KeyboardScreenContext)

    const screen = {
        color: "white",
        fontSize: "50px", 
        textShadow: "1px 1px 1px black", 
        minHeight: "60px", 
        backgroundColor: 'rgba(0, 0, 0, 0.363)',
    }

    return(
        <>
            <p style={{fontSize: "40px", marginBottom: "10px", color: "white"}}>INGRESA TU DNI PARA CONTINUAR</p>
            <p style={screen}>{text}</p>
            <img className='main-screen-img' src="./../../public/img/background.jpg" alt="" />
        </>
    )
}

export function CategoryScreen(){
    return(
        <section className='category'>
            <div>

            </div>
        </section>
    )
}
