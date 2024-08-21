import React, { useState, useEffect, useRef } from 'react'
export default function App() {

    const [texto, setTexto] = useState('')
    const total = useRef(1)    // É semelhante ao useState, mas não faz a renderização do componente (Quarda valores entre as renderizações, mas não renderiz   a)
    useEffect(() => {
        total.current++
    })

    return (
        <div className="componente">
            <h1>useRef - INTRODUÇÃO AO USEREF</h1>
            <hr />
            <input type="text" value={texto} onChange={evento => { setTexto(evento.target.value) }} />
            <hr />
            <p>O texto é: <strong>{texto}</strong></p>
            <hr />
            <p>Total: {total.current}</p>
        </div>
    )
}