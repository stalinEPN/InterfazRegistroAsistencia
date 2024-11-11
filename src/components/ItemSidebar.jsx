import React, { Component } from "react";
import lobo from "./img/lobo.png"

class ItemSidebar extends Component{
  render(){
    return(
      <aside className="sidebar">
      <img className="lobo-aeie" src={lobo} alt="aeie-lobo"/>
      <h2 className="titulo-sidebar">AEIE</h2>
      <nav className="menu">
        <a className="menu-item" href="#">Tienda</a>
        <a className="menu-item" href="#">Casilleros</a>
        <a className="menu-item" href="#">Registro de asistencia</a>
        <a className="menu-item" href="#">Turnos</a>
      </nav>
    </aside>
    );
  }
}

export default ItemSidebar;