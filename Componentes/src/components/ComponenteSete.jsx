import React from "react";

export default function(props) {  // Posso exportar a partir daqui também
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {/*Não posso colocar um if(props.valor) {}, então posso usar o operador ternário (Ou uma função) */}
            {   
                props.valor ?  // Poderia ter usado   props.valor === true
                    <div>
                        <p>Análise do valor</p>
                        <p>Verdadeiro</p>
                    </div>
                : 
                    <div>
                        <p>Análise do valor</p>
                        <p>Falso</p>
                    </div>
            }
        </div>
    )
}