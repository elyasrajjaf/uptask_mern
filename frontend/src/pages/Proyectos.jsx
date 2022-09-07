import { Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"

const Proyectos = () => {

  const { proyectos } = useProyectos()

  
  return (
    <>
      <h1 className="text-3xl p-4 mb-5 font-semibold text-sky-600">Proyectos</h1>
      <div>
        {proyectos.length ? 
          proyectos.map(proyecto => (
            <PreviewProyecto
              key={proyecto._id}
              proyecto={proyecto}
            />
        )) 
        : <p className="text-gray-600 p-5">Aun no hay proyectos, <Link className='font-semibold text-sky-600' to='crear-proyecto'>clica aqui para crear tu primer proyecto.</Link> </p>}
      </div>
    </>
  )
}

export default Proyectos