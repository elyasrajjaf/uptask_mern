import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState('')

    const navigate = useNavigate()

    const { setAuth } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()

        if([email, password].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post('/usuarios/login', {email, password})
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/proyectos')
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
            <h1 className="text-3xl font-semibold text-gray-800 my-5" >Inicia sesión y administra tus proyectos</h1>
            <p className='text-gray-400 mb-5'><span className='text-sky-700 font-semibold'>Inicia sesión</span> para poder crear y administrar proyectos con tu equipo!</p>
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
            <div className="my-5">
                <input
                    id='password'
                    type='password'
                    placeholder="Contraseña"
                    className="w-full  px-3 py-4 rounded-xl bg-gray-50"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value='Iniciar sesión'
                className="w-full py-3 my-3 text-white rounded-xl text-lg capitalize bg-sky-600 hover:cursor-pointer hover:bg-sky-800 transition-colors" 
            />
            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-5 text-slate-500 capitalize text-sm"
                    to='/registrar'
                >¿No tienes una cuenta? Regístrate</Link>
                <Link
                    className="block text-center my-5 text-slate-500 capitalize text-sm"
                    to='olvide-password'
                >¿Olvidaste tu contraseña?</Link>
            </nav>
        </form>
    </>
  )
}

export default Login