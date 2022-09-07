import { Link } from "react-router-dom"
import { AiOutlinePoweroff } from "react-icons/ai"

const Header = () => {
  return (
    <header className="px-4 py-3 m-5 rounded-xl bg-white">
        <div className="md:flex md:justify-between  items-center px-3">
            <h2 className="text-4xl text-sky-600 font-semibold text-center">UpTasks</h2>
            <input
                type='search'
                placeholder='Buscar proyecto'
                className='rounded-xl lg:w-96 block px-3 py-4 bg-gray-50'
            />
            <div className="flex items-center gap-4">
                <Link
                    to='/proyectos'
                    className="font-normal"
                >Proyectos</Link>

                <button
                    type="button"
                    className=" px-3 py-4 rounded-xl font-light"
                ><AiOutlinePoweroff className="text-2xl hover:text-red-600 transition-colors"/></button>
            </div>
        </div>
    </header>
  )
}

export default Header