
import React from "react";
import { useState } from 'react'
import "./App.css";
import Encabezado from './componentes/Encabezado'
import Principal from './componentes/Principal'
import Pie from './componentes/Pie'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Encabezado></Encabezado>
        <Principal></Principal>
        <Pie></Pie>
      
    </div>
  )
}

export default App
