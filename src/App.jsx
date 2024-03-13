
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbars from './components/Navbars'
import Home from './view/Home'
import { Route, Routes } from 'react-router-dom'
import Carrito from './view/Carrito'
import Descripcion from './view/Descripcion'
import FaultBack from './view/FaultBack'

function App() {

  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='carrito' element={<Carrito/>}/>
        <Route path='/pizza/:id/:name' element = {<Descripcion/>}/>
        <Route path='*' element={<FaultBack/>}/>
      </Routes>
            
    </>
  )
}

export default App
