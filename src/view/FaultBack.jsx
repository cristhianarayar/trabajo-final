import { useEffect } from "react"
import { useNavigate } from "react-router"


const Error = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, [5000])
  }, [])
  return (
    <>
       <div className="div-page">
            <h1 className="page">La pagina que buscas no existe te redireccionaremos al inicio</h1>
       </div>
    </>
  )
}

export default Error