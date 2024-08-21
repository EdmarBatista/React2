
import React, { useState } from 'react'

export default function () {


    function definirValor() {
        return 1000
    }

    const [valor, setValor] = useState(() => { return 0 }) // Se eu colocasse aqui a função definirValor ela seria executada semple que o componente fosse renderizado, mas se eu usar u arrow function só vai executar na primeira vez que o componente for renderizado

    function diminuir() {
        setValor(valor_antigo => valor_antigo - 1)

    }

    function aumentar() {
        setValor(valor_antigo => valor_antigo + 1)
    }

    return (
        <div className="componente">
            <h1>useState - A FORMA CORRETA DE DEFINIÇÃO DO VALOR DO USESTATE</h1>
            <button onClick={diminuir}>Diminuir</button>
            <span>{valor}</span>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}