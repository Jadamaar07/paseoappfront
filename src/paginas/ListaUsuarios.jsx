//import { usuarios } from "../services/datosUsuario"
import { TarjetaUsuario } from "../componentes/TarjetaUsuario"
import { useState, useEffect } from "react"
import { listarUsuarios } from "../services/servicioUsuario"

export function ListaUsuario() {
    //1. Guardar lis usuarios que llegan del API
    const[usuarios, setUsuarios]=useState([])
    
    //2. Guardar el estaod del consumo del AÍ en una variable si el servidor ya me respondio
    const[cargando, setCargando]=useState(true)

    //3. Guardar los errores que manda el api
    const[error, setError]=useState('') 

    //4. Funcion asincrona para comunicarme con el API 

    async function cargarUsuarios() {
        try {
            const datos = await listarUsuarios()
            setUsuarios(datos)
        } catch {
            setError("No fue posible cargar los espacios")
        }finally{
            setCargando(false)
        }
    }

    //5. Funcion que se ejecuta cuando el componente se carga (aparece en pantalla )
    function alCargarComponente() {
        cargarUsuarios()
    }
    //Se ejectutara la funsion cuando el componente se cargue es lo que significa el corchete vacio
    useEffect(alCargarComponente,[])

    //6. Funcion para pintar la informacion
    function pintarUsuario(usuario) {
        return(
            <div className="col-md-4" key={usuario.id}>
                <TarjetaUsuario usuario={usuario}/>
            </div>
        )
    }
    //7. Rutina para el manejo de la carga y el render de informacion 
    if (cargando) {
        return(
            <p className="text-center, my-5">Cargando usuarios...</p>
        )
    }
    if(error!=''){
        return(
            <div className="alert alert-danger my-5">{error}</div>
        )
    }
    //Si todo esta ok hago el render
    return(
        <>
            <section className="row g-5 my-5">
                {usuarios.map(pintarUsuario)}
            </section>

        
        </>
    )
}
