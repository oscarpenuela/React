import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
          <div className="opcion">
            <button id="A" className="botones" onClick={this.props.handleClick}> {/* id para saber cual botón se activó */}
              A                                                                  {/* onClick el evento del mouse */} 
            </button>
            <h2>{this.props.opcionA}</h2> {/* Recibe las props del parent con this.props - pruebas*/}
          </div>
          <div className="opcion">
            <button id="B" className="botones" onClick={this.props.handleClick}>
              B
            </button>
            <h2>{this.props.opcionB}</h2> {/* Recibe las props del parent con this.props- pruebas*/}
          </div>
        </div>
    );
  }
}

export default Opciones;
