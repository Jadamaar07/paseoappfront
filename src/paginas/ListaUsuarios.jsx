import { usuarios } from "../services/datosUsuario"
import { TarjetaUsuario } from "../componentes/TarjetaUsuario"
export function ListaUsuario() {
    return (
        <>

            <section className="row g-4 my-5">

                {
                    usuarios.map((usuario)=>(
                        <div className="col-md-4" key={usuario.id}>
                            <TarjetaUsuario usuario={usuario}/>
                        </div>
                        
                    ))
                }

            </section>

        </>
    )
}
