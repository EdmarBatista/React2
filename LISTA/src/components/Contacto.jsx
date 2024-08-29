import React from "react";


export default function Contacto(props) {
    return (
        <>
            <div>
                {props.nome} - {props.telefone}
                {/* <button onClick={()=>{props.remover({nome:props.nome, telefone:props.telefone})}}>Remover</button>    Usado quando eu removia o item por meio do nome e telefone  */}
                <button onClick={() => { props.remover(props.id) }}>Remover</button>
            </div>
        </>
    )
}