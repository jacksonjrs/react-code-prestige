import React, { Component } from 'react';
import './App.css';
import './Componente';
import Componente from './Componente';
import Componente1 from './Componente.1';
import Componente2 from './Componente.2';

class App extends Component {
  render() {
    

    return (
      <div>
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Jackson Santos</h1>
          </header>
          <p className="App-intro">                
            
          </p>
        </div>

        <div className="Perfil">
          <Componente />
          <Componente1 color="blue"/>
        </div>
        <div className="Descricao">
           <Componente2 color="red" titulo="Formação" descricao="MBA em Engenharia de Software Orientada à Seviços e Bacharel em Ciência da Computação"/>
           <Componente2 color="blue" titulo="Experiencia" descricao="Trabalho há 12 anos com desenvolvimento de software. Linguagens Java, C#, Shell script e outros."/>
           <Componente2 color="black" titulo="React" descricao="Primeiro contato com React."/>
        </div>
        
      </div>

    );
  }
}

export default App;
