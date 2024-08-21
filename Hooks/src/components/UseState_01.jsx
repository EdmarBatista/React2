import React, { useState } from 'react'

export default function () {

    /*
    // Vai dar erro se eu tentar chamar um Hook dentro de uma condição
         if (true) {
            useState()
        }
     
        */
    useState(['João', 'Ana']) // Posso Criar um array
    useState({ nome: "João", apelido: "Ribeiro" }) // Posso criar um objeto
    useState( // Posso criar um array de objetos
        [
            { id: 0, nome: "João" },
            { id: 1, nome: "Ribeiro" },
            { id: 2, nome: "Ana" },
            { id: 3, nome: "Aninha" }
        ]
    )
    console.log(useState(10)) // Retorna um Array com dois valores
    const val = useState(10)
    console.log(val[0]) // Posso acessar o valor pelo índice 0 do array retornado

    const [valor, setValor] = useState(10) // ao inves de ter que acessar o índice 0 do meu array retornado posso fazer a desestruturação


    function decremento() {
        setValor(valor - 1) // Não é um jeito recomendado de fazer
        //  setValor(valor--) // Vai dar Erro
    }
    function incremento() {
        setValor(valor + 1)
    }
    return (
        <div className="componente">
            <h1>useState - DETALHES SOBRE O FUNCIONAMENTO DO USESTATE</h1>
            <p>Valor: {valor}</p>
            <button onClick={decremento}>Decremento</button>
            <button onClick={incremento}>Incremento</button>
        </div>
    )
}