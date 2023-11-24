
import { useContext, useEffect, useState } from "react"
import AptCard from "../components/AptCard"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import HashLoader from "react-spinners/HashLoader";
import { ThemeContext } from "../context/theme.context";

const spinnerContainerStyle = { paddingTop: "50px", display: "flex", justifyContent: "center" }

function AptList() {

  const { selectedBtnTheme } = useContext(ThemeContext)

  // inicializar el uso de redirecciones
  const navigate = useNavigate()

  // 1.
  const [ pisosList, setPisosList ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isLoadingAgain, setIsLoadingAgain ] = useState(false)

  // 2.
  useEffect(() => {
    
    getData()

  }, [])

  const getData = async() => {
    try {
      // 3.
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response)
      // 4.
      setPisosList(response.data)
      setIsLoading(false) // !
      setIsLoadingAgain(false)

    } catch (error) {
      console.log(error)
      // direccionar al usuario "/error"
      // ! importante, no olvidar gestionar que pasa con el usuario cuando hay errores de tipo 500
      navigate("/error")
    }
  }

  const handleRefresh = () => {
    setIsLoadingAgain(true) // vamos a buscar nueva info
    getData()
  }

  // 5.
  if (isLoading === true) {
    return (
      <div style={spinnerContainerStyle}>
        <HashLoader color={"orange"} size={50}/>
      </div>
    )
  }

  return (
    <div>

      <button onClick={ handleRefresh } className={selectedBtnTheme}>
        {isLoadingAgain === true ? <HashLoader color={"red"} size={15}/> : <span>Refrescar</span> }
      </button>
      
      <h2>Lista de pisos</h2>

      {pisosList.map((eachPiso) => {
        return <AptCard key={eachPiso._id} piso={eachPiso}/>
      })}

    </div>
  )
}

export default AptList