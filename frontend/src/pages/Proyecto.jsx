import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import useProyectos from '../hooks/useProyectos'

import ModalFormularionTarea from "../components/ModalFormularioTarea"


const Proyecto = () => {

    const params = useParams()

    const { obtenerProyecto, proyecto, cargando, handleModalTarea } = useProyectos()

    const [modal, setModal] = useState(false)

    
    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])
    
    const { nombre } = proyecto

    if(cargando) return 'Cargando...'

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">{nombre}</h1>
                <div>
                    <Link
                        to={`/proyectos/editar/${params.id}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer text-gray-500 hover:text-sky-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <button
                onClick={handleModalTarea}
                type="button"
                className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase mt-5 flex gap-2 items-center justify-center bg-sky-600 text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <span>Nueva tarea</span>
          </button>

          <ModalFormularionTarea
            modal={modal}
            setModal={setModal}
          />
        </>
    )
}

export default Proyecto