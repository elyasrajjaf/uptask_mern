import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alerta from "../components/Alerta"


const NuevoPassword = () => {

    const [password, setPassword] = useState('')
    const [tokenValido, setTokenValido] = useState(false)
    const [alerta, setAlerta] = useState({})
 
    const params = useParams()

    const { token } = params

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/usuarios/olvide-password/${token}`)
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        comprobarToken()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        if(password.length < 6 ) {
            setAlerta({
                msg: "La contraseña debe contener al menos 6 caracteres",
                error: true
            })
            return
        }

        try {
            const url = `/usuarios/olvide-password/${token}`
            const { data } = await clienteAxios.post(url, { password })
            console.log(data)
            setAlerta({
                msg: data.msg,
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

  return (
    <>
        { tokenValido ? (
            <form 
                onSubmit={handleSubmit}
                className="my-10 bg-white rounded-2xl p-10">
                <h1 className="text-3xl font-semibold text-gray-800 my-5" >Recupera tu acceso y administra tus proyectos</h1>
                <p className='text-gray-400 mb-5'><span className='text-sky-700 font-semibold'>Escribe tu nueva contraseña</span> para poder crear y administrar proyectos con tu equipo!</p>
                { msg && <Alerta alerta={alerta}/>}
                <div className="my-5">
                    <input
                        id='password'
                        type='password'
                        placeholder="Escribe tu nueva contraseña"
                        className="w-full  px-3 py-4 rounded-xl bg-gray-50"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
    
                <input
                    type='submit'
                    value='Guardar cambios'
                    className="w-full py-3 my-3 text-white rounded-xl text-lg capitalize bg-sky-600 hover:cursor-pointer hover:bg-sky-800 transition-colors" 
                />

                <Link
                    className="block text-center text-slate-500 capitalize text-sm"
                    to='/'
                >Inicia sesión</Link>
    
            </form>
        ) : (
            <div  className="my-10 bg-white rounded-2xl p-10">
                <h1 className="text-3xl font-semibold text-gray-800 my-5" >Recupera tu acceso y administra tus proyectos</h1>
                <p className='text-gray-400 mb-5'><span className='text-sky-700 font-semibold'>Escribe tu nueva contraseña</span> para poder crear y administrar proyectos con tu equipo!</p>
                { msg && <Alerta alerta={alerta}/>}
                <Link
                    className="block text-center mt-5 text-slate-500 capitalize text-sm"
                    to='/'
                >Volver al inicio</Link>

            </div>
        )}

    </>
  )
}

export default NuevoPassword