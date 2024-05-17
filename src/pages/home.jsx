import { KeyboardScreen, MainScreen } from "../components/Screens";
import { Keyboard, KeyboardInput } from "../components/Keyboard";

export function Home(){

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