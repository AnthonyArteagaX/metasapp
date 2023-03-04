import { useState } from 'react'
import './App.css'
import Encabezado from './componentes/Encabezado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Encabezado></Encabezado>
      
    </div>
  )
}

export default App
