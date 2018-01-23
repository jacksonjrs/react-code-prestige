import React, { Component } from 'react';



class Componente2 extends Component {
  render() {
    const corTexto = {
      color : this.props.color
    }

    return (
      
      <div className="Componente2">
              
        
        <h2 style={corTexto}>{this.props.titulo}</h2>
        
        <p className="Componente2-intro" style={corTexto}>{this.props.descricao}</p>
      </div>
    );
  }
}

export default Componente2;
