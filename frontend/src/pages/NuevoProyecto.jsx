import FormularioProyecto from "../components/FormularioProyecto"

const NuevoProyecto = () => {

  const nuevoProyecto = 'Crear un nuevo proyecto'

  return (
    <>
      <div className="mt-10 flex justify-center">
        <FormularioProyecto
          page={nuevoProyecto}
        />
      </div>
    </>
  )
}

export default NuevoProyecto