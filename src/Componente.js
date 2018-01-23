import React, { Component } from 'react';
import foto from './jackson.jpg';
import './App.css';

class Componente extends Component {
  
  render() {
 
    return (
      <div className="Componente">
        <header className="Componente-header">
                   
        </header>
        <div className="Foto-perfil">
          <img src={foto} className="Componente-logo" alt="foto"  style={{width: 300, height: 300}}/>
        </div>
      </div>
    );
  }
}

export default Componente;
