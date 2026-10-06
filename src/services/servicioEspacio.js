import { clienteApi } from "./clienteApi";

const RUTA = '/espacios'

export async function guardarEspacio(espacio) {
    try {

        const respuesta = await clienteApi.post(RUTA, espacio)
        return respuesta.data
    } catch (error) {
        console.error("Error guardado del espacio: ", error);
        throw error
    }
}

export async function listarEspacio() {
    try {
        const respuesta = await clienteApi.get(RUTA)
        return respuesta.data
    } catch (error) {
        console.error("Error listado de espacios: ", error)
        throw error
    }
}

export async function modificarEspacios(id, espacio) {
    try {
        const respuesta = await clienteApi.put(RUTA + '/' + espacio, id)
        return respuesta.data
    } catch (error) {
        console.error("Error modificar el espacios: ", error)
        throw error
    }
}

export async function eliminarEspacio(id) {
    try {
        const respuesta = await clienteApi.delete(RUTA + '/' + id)
        throw respuesta
    } catch (error) {
        console.error("Error eliminar el espacio: ", error)
        throw error
    }

}