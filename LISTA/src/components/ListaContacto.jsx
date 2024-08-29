import React from "react";
import {v4 as chave} from 'uuid'

export default function ListaContactos({ listaContactos }) {
    return (
        <>
            <ul>
                {listaContactos.map(contacto => {
                    return <li key ={chave()}>{contacto.nome + " " + contacto.telefone}</li>
                })}
            </ul>
        </>
    )
}