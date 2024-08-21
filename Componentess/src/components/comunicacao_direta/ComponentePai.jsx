import React from 'react'

import ComponenteFilho from './ComponenteFilho'

function ComponentePai(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <br />
            {/* É uma comunicação direta, pois o Pai envia propriedades para o componente filho */}
            <ComponenteFilho titulo="Componente Filho 1" cargo="administrador">
                 João Ribeiro {/* Coloquei como children em vez de uma propriedade direta */}
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho 2" cargo="secretária">
                Ana Silva
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho 3" cargo="operador">
                Carlos Santos
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai