import React from "react";

const ComponenteTres = (props) => {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Subtítulo: {props.subtitulo}</p>
        </div>
    )
}
export default ComponenteTres