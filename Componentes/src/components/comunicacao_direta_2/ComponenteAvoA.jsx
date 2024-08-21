import React from "react"
// Não é uma nova forma de comunicação direta, mas é um exemplo para vermos a complexidade que podemos ter
import ComponentePaiA from "./ComponentePaiA"

export default (props) => {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Avô</p>
            <ComponentePaiA nome="joaquim" apelido="silva" />
        </div>
    )
}