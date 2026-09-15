export function TarjetaUsuario({ usuario }) {
    return (
        <>
        <section className="card p-4 shadow">
            <h5 className="card-title fw-bold">{usuario.nombres}</h5>
            <p className="text-muted">Correo: {usuario.correo}</p>
            <p className="mb-0">Rol: {usuario.rol}</p>
        </section>
        </>
        
    )
}
