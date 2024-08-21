import React from "react";

export default function (props) {

    function condicao() {

        switch (props.valor) {
            case "Joao":
                return <p>É o meu nome</p> // Retorna um jsx
                break;
            case "Ana":
                return <p>É o nome da minha irmã</p>
                break;
            default:
                return <p>Desconheço quem tenha esse nome</p>
                break;
        }
        // // Poderia ter um if também
        // if (props.valor >= 10) {
        //     return <p>O valor é igual ou superior a 10</p>
        // } else {
        //     return <p>O valor é inferior a 10</p>
        // }

    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {/*Não posso colocar um if(props.valor) {}, então posso usar o operador ternário (Ou uma função) */}
            {condicao()}
        </div>
    )
}