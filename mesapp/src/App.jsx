
import React from "react";
import "./App.css";
import Encabezado from './componentes/compartidos/Encabezado'
import Principal from './componentes/compartidos/Principal'
import Pie from './componentes/compartidos/Pie'

import Lista from "./componentes/lista/Lista";
import Detalles from "./componentes/nueva/Detalles.jsx";
function App() {

  return (
    <div className="App">
        <Encabezado></Encabezado>
        <Principal>
           {/* <Lista></Lista>  */}
        <Detalles></Detalles>
        </Principal>
        <Pie></Pie>
      
    </div>
  )
}

export default App;
