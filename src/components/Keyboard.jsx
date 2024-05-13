import './../assets/styles/Keyboard.css'
import { ClearBtn, DeleteBtn, EmptyBtn, EnterBtn, NumberBtn } from "../components/Buttons";
import { useCheckMessage } from '../hooks/ApiHooks';
export function Keyboard(){

    return(
        <div className='keyboard'>
            <NumberBtn>1</NumberBtn>
            <NumberBtn>2</NumberBtn>
            <NumberBtn>3</NumberBtn>
            <DeleteBtn>Borrar</DeleteBtn>
            <NumberBtn>4</NumberBtn>
            <NumberBtn>5</NumberBtn>
            <NumberBtn>6</NumberBtn>
            <ClearBtn>Limpiar</ClearBtn>
            <NumberBtn>7</NumberBtn>
            <NumberBtn>8</NumberBtn>
            <NumberBtn>9</NumberBtn>
            <EnterBtn>Enviar</EnterBtn>
            <EmptyBtn></EmptyBtn>
            <NumberBtn>0</NumberBtn>
            <EmptyBtn></EmptyBtn>
        </div>
    )
}

export function KeyboardInput(){

    const {text, message} = useCheckMessage()
    
    const screen = {
        color: "#16919b",
        fontSize: "50px", 
        minHeight: "60px", 
        backgroundColor: 'rgba(0, 0, 0, 0.450)',
    }



    return(
        <>
            <p style={{fontSize: "40px", marginBottom: "10px", color: "#16919b", backgroundColor: "rgba(0, 0, 0, 0.450)", padding: "10px"}}>{message}</p>
            <p style={screen}>{text}</p>
        </>
    )
}

