import React, { Component } from 'react';



class Componente1 extends Component {
  render() {
    const corTexto = {
      color : this.props.color
    }
    return (
      <div className="Componente1">
       
      
        <p className="Componente1-intro" style={corTexto}>
         Nome: Jackson José Ramos Santos<br/>
         Idade: 34 anos<br/>  
         Cidade Natal: Salvador<br/>
         Cidade Atual: São Paulo<br/>          
        </p>
       
      </div>
    );
  }
}

export default Componente1;
