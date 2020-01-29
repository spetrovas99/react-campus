import React from "react";
import Profe from "./Profe";
import Alumnos from "./Alumnos";
const asignatura =(props) =>{
    let result = null;

    if (props.asignatura.visto){
        result = (
        <div className="asignatura">
            <h2 onClick = {props.clickAsignatura.bind(this, props.asignatura.nombre)}>{props.asignatura.nombre}</h2>
            <Profe profe={props.profe}></Profe>
            <Alumnos alumnos={props.alumnos} clickAlumno={props.clickAlumno}></Alumnos>
        </div>
        )
    }else{
        result = (
            <div className="asignatura">
                <h2 onClick = {props.clickAsignatura.bind(this, props.asignatura.nombre)}>{props.asignatura.nombre}</h2>
            </div>
        )
    }
    return result;
}

export default asignatura;