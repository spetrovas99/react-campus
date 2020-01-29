import React, { Component } from 'react';
import './App.css';
import Asignatura from './Componentes/Asignatura';

class App extends Component {
  state = {

    alumnos:[{nombre: "maria garica", nota:4, visto: false},
            {nombre: "Mario Jimenez",nota: 5,visto : false},
            {nombre: "Luis Francisco ",nota: 9,visto :false},
            {nombre: "Marcos Nieto",nota: 6,visto :false},
            {nombre: "Mar Sanz",nota: 5,visto : false},
            {nombre: "Luisa Lopez",nota: 8,visto : false}
     ],
    profes:[{nombre:"Alberto Valero"},{nombre:"Jorge Ladrón"}],
    asignatura: [{ nombre: 'Programación 1', visto: false}, {nombre: 'Programación 2',visto: false}],
        
  }
  notaHandler = (nombre) =>{
    let result = this.state.alumnos;

    result = result.map(elem => { 
      if(nombre === elem.nombre){
        elem.visto = !elem.visto;
      }
      return elem;
    })

    this.setState({alumnos: result});
  }

  asignaturaHandler=(nombre)=>{
    let result = this.state.asignatura;
    result = result.map(elem => { 
      if(nombre === elem.nombre){
        elem.visto = !elem.visto;
      }
      return elem;
    })

    this.setState({asignatura: result});
  }
  
  render(){
    return (
      <div classnombre="App">
        <Asignatura 
        clickAsignatura = {this.asignaturaHandler} 
        clickAlumno = {this.notaHandler}
        asignatura={this.state.asignatura[0]}
        profe={this.state.profes[0]} 
        alumnos={[this.state.alumnos[0], this.state.alumnos[1], this.state.alumnos[2]]}
        ></Asignatura>
        <Asignatura 
        clickAsignatura = {this.asignaturaHandler} 
        clickAlumno = {this.notaHandler}
        asignatura={this.state.asignatura[1]}
        profe={this.state.profes[1]} 
        alumnos={[this.state.alumnos[3], this.state.alumnos[4], this.state.alumnos[5]]}
        ></Asignatura>
      </div>
    );
  }
  
}

export default App;
