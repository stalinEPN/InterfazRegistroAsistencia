import './App.css';
import React from "react";
import ItemSidebar from "./components/ItemSidebar";
import logo from "./components/img/aeie-logo.png"
import ItemRegistroAsistencia from './components/ItemRegistroAsistencia';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemSidebar></ItemSidebar>
        <main className="content">
          <img className="logo" src={logo} alt='aeie'/>
          <ItemRegistroAsistencia></ItemRegistroAsistencia>
        </main>
      </div>
    </div>
  );
}

export default App;
