import React, { useState, useEffect, useMemo } from 'react'

export default function () {

    const [valor, setValor] = useState(() => { return 0 })
    const [numero, setNumero] = useState(() => { return 1000 })

    // const valorCalculado = funcaoDemorada(valor)   // Se eu usar essa função vai demorar a executar
    const valorCalculado = useMemo(() => {
        return funcaoDemorada(valor)
    }, [valor]) // A função só vai ser recalculada se eu alterar valor,   Se eu alterar numero a função não vai ser executada

    useEffect(() => {
        console.log('Renderizado (useMemo)')
    }) // Para perceber quando nossa aplicação está sendo renderizada



    function incrementar() {
        setValor(oldValor => oldValor + 1)
    }
    function incrementar2() {
        setNumero(oldNumero => oldNumero + 100)
    }

    function funcaoDemorada(num) {
        for (let i = 0; i < 5000000000; i++) { } //Deixa a função mas lenta para simular um cálculo demorado
        return num * 2
    }

    return (
        <div className="componente">
            <h1>useMemo - USEMEMO</h1>
            <hr />
            <p>Valor: {valor}</p>
            <p>Número: {numero}</p>
            <p>Valor calculado: {valorCalculado}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={incrementar2}>Incrementar (useMemo)</button>
        </div>
    )
}