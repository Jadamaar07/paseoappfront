import { clienteApi } from "./clienteApi";

const RUTA = '/usuarios'

export async function guardarUsuario(usuario) {
    try {

        const respuesta = await clienteApi.post(RUTA, usuario)
        return respuesta.data
    } catch (error) {
        console.error("Error guardado del usuario: ", error);
        throw error
    }
}

export async function listarUsuarios() {
    try {
        const respuesta = await clienteApi.get(RUTA)
        return respuesta.data
    } catch (error) {
        console.error("Error listado de usuarios: ", error)
        throw error
    }
}

export async function modificarUsuario(id, usuario) {
    try {
        const respuesta = await clienteApi.put(RUTA + '/' + usuario, id)
        return respuesta.data
    } catch (error) {
        console.error("Error modificar el usuarios: ", error)
        throw error
    }
}

export async function eliminarUsuario(id) {
    try {
        const respuesta = await clienteApi.delete(RUTA + '/' + id)
        throw respuesta
    } catch (error) {
        console.error("Error eliminar el usuarios: ", error)
        throw error
    }

}