import React, { useState } from 'react'

export default function () {

    const [valor, setValor] = useState(100)

    function diminuir() {
        setValor(valor_antigo => valor_antigo - 1)
            /*     setValor(valor-1)    // Não vai mudar várias vezes o valor
            setValor(valor-1)
            setValor(valor-1) */
    }

    function aumentar() {
        setValor(valor_antigo => valor_antigo + 1)
    }

    return (
        <div className="componente">
            <h1>useState - A FORMA CORRETA DE ATUALIZAR VALORES COM USESTATE</h1>
            <button onClick={diminuir}>Diminuir</button>
            <span>{valor}</span>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}