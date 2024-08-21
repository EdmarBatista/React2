import React from "react"

import ComponenteFilha from "./ComponenteFilha"

function ComponenteMae(props) {

    function clicou(){
        console.log("Botão da filha foi clicado!")
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <ComponenteFilha titulo="Filha" click={clicou}></ComponenteFilha>
        </div>
    )
}

export default ComponenteMae