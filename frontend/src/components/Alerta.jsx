
const Alerta = ({alerta}) => {
  return (
    <div className={` ${alerta.error ? 'bg-red-400' : 'bg-sky-700'} text-center px-3 py-4 rounded-xl text-white font-medium text-md`} >
        {alerta.msg}
    </div>
  )
}

export default Alerta