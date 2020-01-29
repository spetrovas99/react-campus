import React from "react";
const alumnos = (props)=>{
return(
    <div className="alumnos">
        <p onClick={props.clickAlumno.bind(this, props.alumnos[0].nombre)}>{props.alumnos[0].nombre} -> {props.alumnos[0].visto? props.alumnos[0].nota:""}</p>
        <p onClick={props.clickAlumno.bind(this, props.alumnos[1].nombre)}>{props.alumnos[1].nombre} -> {props.alumnos[1].visto? props.alumnos[1].nota:""}</p>
        <p onClick={props.clickAlumno.bind(this, props.alumnos[2].nombre)}>{props.alumnos[2].nombre} -> {props.alumnos[2].visto? props.alumnos[2].nota:""}</p>
    </div>
);
}
export default alumnos;