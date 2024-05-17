import { KeyboardScreen, MainScreen } from "../components/Screens"
import { TablaTurnos, Turno, TurnoCampos } from "../components/Turno"
import { useTurnos } from "../hooks/ApiHooks"
export function AppointmentsPage(){

    const turnos = useTurnos()
    return(
        <>
            <MainScreen/>
            <KeyboardScreen>
                <TablaTurnos>
                    <TurnoCampos></TurnoCampos>
                    {turnos ? turnos.map(turno => <Turno key={turno.id} turno={turno}/>) : "Cargando"}
                </TablaTurnos>
            </KeyboardScreen>
        </>
    )
}