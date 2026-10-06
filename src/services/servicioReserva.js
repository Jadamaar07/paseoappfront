import { clienteApi } from "./clienteApi";

const RUTA = '/reservas'

export async function guardarEspacio(reserva) {
    try {

        const respuesta = await clienteApi.post(RUTA, reserva)
        return respuesta.data
    } catch (error) {
        console.error("Error guardado del reserva: ", error);
        throw error
    }
}

export async function listarReservas() {
    try {
        const respuesta = await clienteApi.get(RUTA)
        return respuesta.data
    } catch (error) {
        console.error("Error listado de reserva: ", error)
        throw error
    }
}

export async function modificarReserva(id, reserva) {
    try {
        const respuesta = await clienteApi.put(RUTA + '/' + reserva, id)
        return respuesta.data
    } catch (error) {
        console.error("Error modificar el reserva: ", error)
        throw error
    }
}

export async function eliminarReserva(id) {
    try {
        const respuesta = await clienteApi.delete(RUTA + '/' + id)
        throw respuesta
    } catch (error) {
        console.error("Error eliminar el reserva: ", error)
        throw error
    }

}