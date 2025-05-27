import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Empleados from './pages/Empleados';
import Usuarios from './pages/Uusarios'
import Productos from './pages/Productos'

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
  <Route path="/clientes" element={<Usuarios />} />
    <Route path="/productos" element={<Productos />} />

</Routes>
        
      </div>
 
    </Router>
    </>
  )
}

export default App
