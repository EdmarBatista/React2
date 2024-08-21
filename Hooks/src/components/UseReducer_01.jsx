import React, { useState, useReducer } from 'react'

export default function () {

    const [valor, setValor] = useState(() => { return 100 })
    const [mostrar, setMostrar] = useState(() => { return true })


    // Reducer
    // Vamos concentar os dois valores dos states em um único reducer

    const [state, dispatch] = useReducer(reducer, {
        valor: 1000,
        mostrar: true
    })
    // Função Reducer
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENTAR':
                return {
                    valor: state.valor + 1,
                    mostrar: state.mostrar
                }

            case 'VISIBILIDADE':
                return {
                    valor: state.valor,
                    mostrar: !state.mostrar
                }

            default:
                return state   // Não havendo uma opção para alterar o meu state, eu vou devolve-lo do jeito que ele estiver
        }
    }


    return (
        <div className="componente">
            <h1>useReducer - USEREDUCER</h1>
            <hr />
            <h3>Com useState</h3>
            <p>Valor: {valor}</p>
            {mostrar && <p>Colocar Visível</p>}
            <button onClick={() => setValor(valor + 1)}>Incrementar</button>
            <button onClick={() => setMostrar(!mostrar)}>Mostrar/Esconder</button>


            {/* Reducer    */}
            <hr />
            <h3>Com useReducer</h3>

            <p>Valor: {state.valor}</p>
            {state.mostrar && <p>Colocar Vísivel Reducer</p>}
            <button onClick={() => { dispatch({ type: 'INCREMENTAR' }) }}>Incrementar</button>
            <button onClick={() => { dispatch({ type: 'VISIBILIDADE' }) }}>Mostrar/Esconder</button>

        </div>
    )
}