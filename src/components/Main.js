import React, { Component } from 'react';
import data from "./data.json";
import Opciones from "./Opciones";
import Recordatorio from './Recordatorio';

const history = [];

export default class Main extends Component {
/*     constructor(props){
        super(props);   /* Se debe llamar el constructor 
        this.state = { count: 0,
            history: [],
            beforeSelection: ''
        }; /* Se debe inicializar el state es la única vez que se asigna directamente 
    }  */

    /* Como lo único que se hace dentro del constructor es inicializar el state, tambien se puede así */
    state = { count: 0,
        prevSelection: "",
    };   

    
/*  Para la lógica de los estados tomamos el valor de cada estado en el array del data.json:
    id  valor
    1       0
    2a      1
    2b      2
    3a      3
    3b      4
    4a      5
    4b      6
    5a      7
    5b      8
    Entonces para pasar de:
    a a a sumamos 2
    a a b sumamos 3
    b a a sumamos 1
    b a b sumamos 2 */


    handleClick = (event) => {
        const id = event.target.id;
        console.log(id);
        if(this.state.count === 0){
             if(id === "A"){
                this.setState({count: this.state.count + 1, prevSelection: "A",});
            }else{
                this.setState({count: this.state.count + 2, prevSelection: "B",});
            }
        }else if(this.state.count < 7){
            if(this.state.prevSelection === "A"){
                if( id === "A"){
                    this.setState({count: this.state.count + 2, prevSelection: "A"});
                }else{
                    this.setState({count: this.state.count + 3, prevSelection: "B"});
                }
            }else if(this.state.prevSelection === "B"){
                if( id === "A"){
                    this.setState({count: this.state.count + 1, prevSelection: "A"});
                }else{
                    this.setState({count: this.state.count + 2, prevSelection: "B"});
                }
            }
        }else{
            alert("Fin.");
        }        
    }

    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            history.push(this.state.prevSelection);
            //console.log('Actualizado');
        } 
    }

    render() {
        return (
            <div className="layout">
                
                <div className="historia">
                    <h1>{data[this.state.count].historia}</h1>
                </div>

                <Opciones
                    handleClick={this.handleClick}              /* Envío el evento de click al componente Opciones */
                    opcionA={data[this.state.count].opciones.a}
                    opcionB={data[this.state.count].opciones.b}
                />
                <Recordatorio
                    history={history.map((h,index)=>(                        
                        <li key={index}>{h}</li>
                        ))} 
                    prevSelection={this.state.prevSelection}
                />    
                {/* <div className="opciones">          // primera version 
                        <div className="opcion">
                            <button className="botones">
                            A
                            </button>
                            <h2>{data[0].opciones.a}</h2>
                        </div>
                        <div className="opcion">
                            <button className="botones">
                            B
                            </button>
                            <h2>{data[0].opciones.b}</h2>
                        </div>
                        </div> */}

                {/* <div className="recordatorio">      //primera version
                    <h3>Selección anterior: {this.state.prevSelection}</h3>
                    <h4>Historial de opciones elegidas:</h4>
                    <ul>{history.map((h,index)=>(                        
                        <li key={index}>{h}</li>
                        ))}                        
                    </ul>
                </div> */}
            </div>
        )
    }
}




            