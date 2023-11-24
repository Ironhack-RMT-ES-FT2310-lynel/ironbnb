import './App.css'

import { Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import AptAdd from './pages/AptAdd'
import AptList from './pages/AptList'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import Home from './pages/Home'
import { useContext } from 'react'
import { ThemeContext } from './context/theme.context'


function App() {

  const { darkTheme, toggleTheme, selectedPageTheme, selectedBtnTheme } = useContext(ThemeContext)

  return (
    // <div className={darkTheme === true ? "dark-page" : "light-page"}>
    <div className={selectedPageTheme}>

      <button className={selectedBtnTheme} onClick={toggleTheme}>Cambiar tema</button>
     
      <Navbar />

      <Routes>

        {/* //* RUTAS DE FRONTEND */}

        <Route path="/" element={ <Home /> }/>
        <Route path="/pisos/list" element={ <AptList /> }/>
        <Route path="/pisos/add" element={ <AptAdd /> }/>


        {/* gestor de paginas de errores */}
        <Route path="/error" element={ <Error /> }/>
        <Route path="*" element={ <NotFound /> }/>


      </Routes>

    </div>
  )
}

export default App
