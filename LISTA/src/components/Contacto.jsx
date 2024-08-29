import React from "react";


export default function Contacto(props) {
    return (
        <>
           <div>
                {props.nome} - {props.telefone}
                <button onClick={()=>{props.remover({nome:props.nome, telefone:props.telefone})}}>Remover</button>
            </div>
        </>
    )
}