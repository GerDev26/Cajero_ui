
import { KeyboardScreen, MainScreen } from "../components/Screens";
import { Keyboard, KeyboardInput } from "../components/Keyboard";
import './../assets/styles/pages.css'

export function Home(){

    const estadoGuardado = localStorage.getItem('token');
    if (estadoGuardado) {
      const estadoParseado = JSON.parse(estadoGuardado);
      console.log('Estado recuperado:', estadoParseado.token);
    } else {
      console.log('No se encontró ningún estado guardado en localStorage.');
    }

    return(
        <>
            <KeyboardScreen>
                <Keyboard/>
            </KeyboardScreen>
            <MainScreen>
                <KeyboardInput/>
            </MainScreen>
        </>
    )
}