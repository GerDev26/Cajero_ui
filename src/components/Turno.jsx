import '.././assets/styles/TablaTurnos.css'
export function Turno({turno}){
    return(
        <article className='card-turno'>
            <div className='card-turno-descripcion'>{turno.descripcion}</div>
            <div className='card-turno-numero'>{turno.numero}</div>
            <div className='card-turno-modulo'>{turno.letra}</div>
        </article>
    )
}
export function TurnoCampos(){
    return(
        <article className='card-turno-campo'>
            <div className='card-turno-descripcion'>DESCRIPCION</div>
            <div className='card-turno-numero'>NUMERO</div>
            <div className='card-turno-modulo'>MODULO</div>
        </article>
    )
}

export function TablaTurnos({children}){
    return(
        <section className="tabla-turnos-container">
            {children}
        </section>
    )
}