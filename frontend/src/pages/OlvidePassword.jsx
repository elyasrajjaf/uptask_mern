import { useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"

import Alerta from "../components/Alerta"

const OlvidePassword = () => {

    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if(email === '' || email.length < 6) {
            setAlerta({
                msg: "El email es obligatorio",
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {email})

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
        <form 
            onSubmit={handleSubmit}
            className="my-10 bg-white rounded-2xl p-10">
            <h1 className="text-3xl font-semibold text-gray-800 my-5" >Recupera tu acceso y administra tus proyectos</h1>
            <p className='text-gray-400 mb-5'><span className='text-sky-700 font-semibold'>Recupera tu contraseña</span> para poder crear y administrar proyectos con tu equipo!</p>

            {msg && <Alerta alerta={alerta}/>}
            <div className="my-5">
                <input
                    id='email'
                    type='email'
                    placeholder="Correo electrónico"
                    className="w-full px-3 py-4 rounded-xl bg-gray-50"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value='Enviar instrucciones'
                className="w-full py-3 my-3 text-white rounded-xl text-lg capitalize bg-sky-600 hover:cursor-pointer hover:bg-sky-800 transition-colors" 
            />
            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-5 text-slate-500 capitalize text-sm"
                    to='/'
                >Volver al inicio de sesión</Link>
                <Link
                    className="block text-center my-5 text-slate-500 capitalize text-sm"
                    to='/registrar'
                >Crear cuenta nueva</Link>
            </nav>
        </form>
    </>
  )
}

export default OlvidePassword