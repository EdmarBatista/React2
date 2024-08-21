import React from 'react'

export default function User({ usuario }) { // Desestruturou para só buscar o usuario,   se não fosse assim deveria colocar: User(props)   e na chamada dentro da div eu colocaria {props.usuario.firstName}
    return (
        <>
            <div className="user-container">
                Nome: <strong>{usuario.firstName} {usuario.lastName}</strong>
            </div>
        </>
    )
}