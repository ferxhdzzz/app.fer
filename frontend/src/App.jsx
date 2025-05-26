import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Empleados from './pages/Empleados';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="main-content">


     <Navbar />
<Routes>
 <Route path="/" element={<Inicio />} />
  <Route path="/empleados" element={<Empleados />} />
  <Route path="/clientes" element={<h1>Agregar Productos</h1>} />
    <Route path="/productos" element={<h1>Agregar Productos</h1>} />

</Routes>
        
      </div>
 
    </Router>
    </>
  )
}

export default App
