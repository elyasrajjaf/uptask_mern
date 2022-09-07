import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import Proyecto from "../pages/Proyecto"
import Alerta from "./Alerta"

const FormularioProyecto = ({ page }) => {

    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [cliente, setCliente] = useState('')

    const params = useParams()
    const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos()

    useEffect(() => {
        if(params.id) {
            setId(proyecto._id)
            setNombre(proyecto.nombre)
            setDescripcion(proyecto.descripcion)
            setFechaEntrega(proyecto.fechaEntrega?.split('T')[0])
            setCliente(proyecto.cliente)
        }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault()

        if([nombre, descripcion, fechaEntrega, cliente].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        await submitProyecto({id, nombre, descripcion, fechaEntrega, cliente})
        setId(null)
        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')
    }

    const { msg } = alerta

    return (
        <form 
            className="bg-white rounded-2xl p-10 w-full xl:w-1/2"
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <h1 className="text-3xl font-semibold text-gray-800" >{page}</h1>
            </div>
            {msg && <Alerta alerta={alerta}/>}
            <div className="my-5">
                <input
                    id='nombre'
                    type='text'
                    placeholder="Nombre del proyecto"
                    className="w-full px-3 py-4 rounded-xl bg-gray-50"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="my-5">
                <textarea
                    id='descripcion'
                    placeholder="Descripción del proyecto"
                    className="w-full px-3 py-4 rounded-xl bg-gray-50"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                />
            </div>

            <div className="my-5">
                <label htmlFor="fecha-entrega" className="text-sm p-1 text-gray-400">Fecha de entrega del proyecto</label>
                <input
                    id='fecha-entrega'
                    type='date'
                    className="w-full px-3 py-4 rounded-xl bg-gray-50"
                    value={fechaEntrega}
                    onChange={e => setFechaEntrega(e.target.value)}
                />
            </div>

            <div className="my-5">
                <input
                    id='cliente'
                    type='text'
                    placeholder="Nombre del Cliente"
                    className="w-full px-3 py-4 rounded-xl bg-gray-50"
                    value={cliente}
                    onChange={e => setCliente(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value={id ? 'Actualizar Proyecto' : 'Crear proyecto'}
                className="w-full py-3 my-3 text-white rounded-xl text-lg capitalize bg-sky-600 hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />

        </form>
    )
}

export default FormularioProyecto