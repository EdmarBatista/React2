import React, { useState, useEffect, useCallback } from 'react'

function Lista({ resultados }) {
    const [listaItems, setListaItems] = useState([])
    useEffect(() => {
        setListaItems(resultados())
        console.log('RENDER')
    }, [resultados])
    return (
        listaItems.map(item => <p key={item}>{item}</p>)
    )
}


export default function App() {
    const [numero, setNumero] = useState(100)
    const [temaEscuro, setTemaEscuro] = useState(false)
    // Função para calcular lista de resultados

    // ********* Com a função assim o componente lista sempre será rederizado, mesmo que eu somente altere o tema para claro ou escuro
    // const calculos = () => { 
    //     return [numero * 2, numero * 3, numero * 4]
    // }

    // Agora quando eu altero o tema não ocorre uma renderização da lista devido à execução da função calculos
    const calculos = useCallback(() => {
        return [numero * 2, numero * 3, numero * 4]
    }, [numero])

    // tema da app
    const tema = {
        backgroundColor: temaEscuro ? "black" : "white",
        color: temaEscuro ? "white" : "black",
        height: "50vh"
    }

    return (
        <div style={tema}>
            <h1>REACT — useCallback</h1>
            <hr />
            <button onClick={() => setTemaEscuro(oldTemaEscuro => !oldTemaEscuro)}>Alterar Tema</ button>
            <p style={{ margin: "20px" }}>Número: {numero}</p>
            <button onClick={() => setNumero(oldNumero => oldNumero + 1)}>Incrementar</button>
            <hr />
            <Lista resultados={calculos} />  {/* Calculos não é um valor, mas sim uma função */}
        </div >
    )
}