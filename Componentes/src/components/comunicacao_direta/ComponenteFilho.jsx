import React from 'react'
// Chamado pelo ComponentePai
function ComponenteFilho(props) {
    return (
        <div className="componente">   {/* Informações recebidas por comunicação direta através dos props ou do children */}
            <p className="titulo">Título: {props.titulo}</p>
            <p>Cargo: {props.cargo} - {props.children}</p>
        </div>
    )
}

export default ComponenteFilho