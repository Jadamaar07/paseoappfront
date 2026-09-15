import { reservas } from "../services/datosReserva"
import { TarjetaReserva } from "../componentes/TarjetaReserva"
export function ListaRegistro() {
    return (
        <>

            <section className="row g-4 my-5">

                {
                    reservas.map((reserva)=>(
                        <div className="col-md-4" key={reserva.id}>
                            <TarjetaReserva reserva={reserva}/>
                        </div>
                        
                    ))
                }

            </section>

        </>
    )
}