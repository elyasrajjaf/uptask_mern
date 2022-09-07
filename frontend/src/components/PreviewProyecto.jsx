import { Link } from "react-router-dom"

const PreviewProyecto = ({proyecto}) => {

    const { nombre, _id, cliente } = proyecto

    return (
        <div className="border-b p-5 flex items-center">
            <p className="flex-1 font-medium text-lg">
                {nombre}
                <span className="text-sm text-sky-500 uppercase">{''} {cliente}</span>
            </p>
            <Link
                to={`${_id}`}
                className='text-gray-600'
            >Ver proyecto</Link>
        </div>
    )
}

export default PreviewProyecto