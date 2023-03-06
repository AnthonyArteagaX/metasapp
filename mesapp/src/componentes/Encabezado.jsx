import React from 'react';
import { ReactComponent as LogoSVG } from "../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../img/perfil.svg";
import './Encabezado.css';
function Encabezado() {


  return (
 <header className='ecabezado'>
    <div className='contenedor'>
        <LogoSVG className='logos'/> 
          
       <a href='/' className='titulo'>
        Metas App
        </a>
       </div>
       <nav>
        <a href='/perfil' className='vinculo'>Perfil
         <PerfilSVG className='icono'/>
          
        </a>
       </nav>
      
      </header>
       
    
  )
}

export default Encabezado

