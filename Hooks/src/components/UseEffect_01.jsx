import React, { useState, useEffect } from "react"   // Agora também importa o useEffect

export default function App() {

    const [valor, setValor] = useState(100)
    const [valor2, setValor2] = useState(1000)

    function alterar() {
        setValor(valor + 10)
    }

    function alterar2() {
        setValor2(valor2 + 10)
    }

    useEffect(() => {
        console.log('Valor alterado')
    }, [valor]) // Executa toda vez que o state valor for alterado

    useEffect(() => {
        console.log('Executado na primeira renderização (useEffect)')
    }, [])  // Uma função é chamda na primeira vez que o componente é renderizado // Posso por exemplo executar a chamada de uma API


    return (
        <div className="componente">
            <h1>useEffect - NTRODUÇÃO AO USEEFFECT</h1>
            <h3>Ver no console</h3>
            <h3>Valor: {valor}</h3>
            <h3>Valor2: {valor2}</h3>
            <button onClick={alterar}>Alterar</button>
            <button onClick={alterar2}>Alterar2</button>
        </div>
    )
}