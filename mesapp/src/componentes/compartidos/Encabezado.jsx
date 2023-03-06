import React from 'react';
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
import  estilos from './Encabezado.module.css';
import Vinculo from './Vinculo';

function Encabezado() {


  return (
 <header className={estilos.ecabezado}>
    <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logos}/> 
          
       <a href='/' className={estilos.titulo}>
        Metas App
        </a>
       </div>
       <nav>
       <Vinculo
        href='/perfil'
        Icono={PerfilSVG}/>
       </nav>
      
      </header>
       
    
  )
}

export default Encabezado

