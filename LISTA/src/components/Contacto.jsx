import React from "react";


export default function Contacto(props) {
    return (
        <>
           <div>
                {props.nome} - {props.telefone}
            </div>
        </>
    )
}