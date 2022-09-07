import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import useProyectos from '../hooks/useProyectos'

import FormularioProyecto from "../components/FormularioProyecto"


const EditarProyecto = () => {

    const params = useParams()
    const { obtenerProyecto, proyecto, cargando, eliminarProyecto } = useProyectos()

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const handleClick = () => {
        if(confirm('Deseas eliminar este proyecto?')) {
            eliminarProyecto(params.id)
        }
    }

    const { nombre } = proyecto
    const editarProyecto = <p>Editar {''}<span className="font-normal text-sky-600">{nombre}</span></p>

    if(cargando) return 'Cargando...'

    return (
        <>
            <div className="flex justify-around">
                <Link 
                    to='/proyectos'
                    className="rounded-lg bg-white py-2 px-4 text-lg hover:bg-sky-600 hover:text-white transition-colors duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </Link>
                <button
                    onClick={handleClick}
                    className="py-2 px-4 flex items-center rounded-lg bg-white hover:bg-red-600 hover:text-white transition-colors duration-300" 
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
            <div className="mt-10 flex justify-center">
                <FormularioProyecto
                page={editarProyecto}
                />
            </div>
        </>
    )
}

export default EditarProyecto