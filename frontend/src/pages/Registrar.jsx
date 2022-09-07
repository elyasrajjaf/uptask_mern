import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit =  async e => {
        e.preventDefault()

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if(password !== repetirPassword ) {
            setAlerta({
                msg: 'Las constaseñas no coinciden',
                error: true
            })
            return
        }

        if(password.length < 6 ) {
            setAlerta({
                msg: 'La contraseña debe contener al menos 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})
        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios.post(`/usuarios`, {nombre, email, password} )
            setAlerta({
                msg: data.msg,
                error: false
            })

            setNombre('')
            setEmail('')
            setPassword('')
            setRepetirPassword('')
        } catch (error) {
            console.log(error)
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
            <h1 className="text-3xl font-semibold text-gray-800 my-5" >Crea tu cuenta y administra tus proyectos</h1>
            <p className='text-gray-400 mb-5'>Crea tu cuenta solo te toma <span className='text-sky-700 font-semibold'>10 minutos</span>, para poder crear y administrar proyectos con tu equipo!</p>
            { msg && <Alerta alerta={alerta}/>}
            <div className="my-5">
                <input
                    id='nombre'
                    type='text'
                    placeholder="Nombre Completo"
                    className="w-full mt-3 px-3 py-4 rounded-xl bg-gray-50"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
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
            <div className="my-5">
                <input
                    id='repetir_password'
                    type='password'
                    placeholder="Repetir contraseña"
                    className="w-full px-3 py-4 rounded-xl bg-gray-50"
                    value={repetirPassword}
                    onChange={e => setRepetirPassword(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value='Crear Cuenta'
                className="w-full py-3 my-3 text-white rounded-xl text-lg capitalize bg-sky-600 hover:cursor-pointer hover:bg-sky-800 transition-colors" 
            />
            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-5 text-slate-500 capitalize text-sm"
                    to='/'
                >¿Tienes una cuenta? Conéctate</Link>
                <Link
                    className="block text-center my-5 text-slate-500 capitalize text-sm"
                    to='/olvide-password'
                >¿Olvidaste tu contraseña?</Link>
            </nav>
        </form>

    </>

  )
}

export default Registrar