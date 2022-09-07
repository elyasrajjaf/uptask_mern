import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"

const ConfirmarCuenta = () => {

  const[alerta, setAlerta] = useState({})
  const[cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()
  const { id } = params

  useEffect(()=> {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`
        const { data } = await clienteAxios(url)
        console.log(data)
        setAlerta({
          msg: data.msg, 
          error: false
        })
        setCuentaConfirmada(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta()
  }, [])

  const { msg } = alerta

  return (
    <>
      <div  className="my-10 bg-white rounded-2xl p-10">
        <h1 className="text-3xl font-semibold text-gray-800 my-5" >Confirma tu cuenta y administra tus proyectos</h1>
        <p className='text-gray-400 mb-5'>Confrima tu cuenta<span className='text-sky-700 font-semibold'> y disfruta</span> creando y administrando proyectos con tu equipo!</p>
        { msg && <Alerta alerta={alerta}/>}
        {cuentaConfirmada && (
          <Link
          className="block text-center mt-4 text-slate-500 capitalize text-sm"
          to='/'
          >Inicia sesión</Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta