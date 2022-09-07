import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { AiOutlinePlusCircle } from "react-icons/ai"

const Sidebar = () => {

    const { auth } = useAuth()

    return (
        <aside className="md:w-80 lg:w-96 px-5 py-10 m-5 rounded-2xl bg-white">
            <p className="text-xl font-semibold">Hola, <span className="text-sky-600">{auth.nombre}</span></p>
            <Link
                to='crear-proyecto'
                className="flex items-center gap-2 py-5 px-2 mt-5 text-center hover:text-sky-600 transition-colors"
            ><AiOutlinePlusCircle className="text-xl"/>Nuevo proyecto</Link>
        </aside>
    )
}

export default Sidebar