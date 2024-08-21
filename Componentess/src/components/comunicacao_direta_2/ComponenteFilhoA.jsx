import React from "react"
// O componenteFilhoA é chamado dentro do componente PAI
export default (props) => {
    return (
        <div className="componente">
            <p>Filho: {props.nome} {props.apelido}</p>
        </div>
    )
}