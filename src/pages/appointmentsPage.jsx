import { SpinLoader } from "../components/Loaders"
import { KeyboardScreen, MainScreen } from "../components/Screens"
import { TablaTurnos, Turno, TurnoCampos } from "../components/Turno"
import { useTurnosNormal, useTurnosVIP } from "../hooks/ApiHooks"
export function AppointmentsPage(){

    const vipTurnos = useTurnosVIP()
    const normalTurnos = useTurnosNormal()
    return(
        <>
            <MainScreen/>
            <KeyboardScreen>
                <TablaTurnos>
                    <TurnoCampos></TurnoCampos>
                    {vipTurnos ? vipTurnos.map(turno => <Turno key={turno.id} turno={turno}/>) : <SpinLoader/>}
                    {normalTurnos ? normalTurnos.map(turno => <Turno key={turno.id} turno={turno}/>) : <SpinLoader/>}
                </TablaTurnos>
            </KeyboardScreen>
        </>
    )
}