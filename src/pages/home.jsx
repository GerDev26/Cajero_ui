import { ClearBtn, DeleteBtn, EmptyBtn, EnterBtn, NumberBtn } from "../components/Buttons";
import { KeyboardScreen, MainScreen } from "../components/Screens";
import { Keyboard } from "../components/Keyboard";
import { KeyboardScreenProvider } from "../contexts/InputContext";
import './../assets/styles/home.css'

export function Home(){
    return(
        <section className="home">
        <KeyboardScreenProvider>
            <Keyboard>
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
                <EmptyBtn></EmptyBtn>
            </Keyboard>

            <MainScreen>
                <KeyboardScreen/>
            </MainScreen>
        </KeyboardScreenProvider>
        </section>
    )
}