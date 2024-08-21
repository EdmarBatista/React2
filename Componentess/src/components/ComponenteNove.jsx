import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function(props) {

/*
A CondicaoIF está em outro componente externo (Ela me retorna uma função):

export default function(props){
    if(props.condicao){
        return props.children
    } else {
        return false
    }
}
    */



    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor === "Joao"}>
                <p>Verdadeiro, é o meu nome</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor === "Ana"}>
                <p>É a minha irmã</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor !== "Joao" && props.valor !== "Ana"}>
                <p>Desconheço este nome</p>
            </CondicaoIf>

        </div>
    )
}