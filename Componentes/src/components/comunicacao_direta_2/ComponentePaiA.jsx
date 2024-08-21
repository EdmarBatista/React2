import React from "react"

import ComponenteFilhoA from "./ComponenteFilhoA"

export default (props) => {
    return (
        <div className="componente">
            <p>Pai</p>
            <ComponenteFilhoA {...props}/>{/*  Passa todas as props para o componente chamado */}
        </div>
    )
}