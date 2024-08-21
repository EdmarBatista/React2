// Não consegui entender muito bem no vídeo,  POSSO PULAR A LEITURA DESSE CÓDIGO


import React, { useState, useEffect, useRef } from 'react'
export default function App() {
    // O useFef não fica associado a nenhuma renderização de texto
    const [texto, setTexto] = useState('')
    const anterior = useRef('')

    useEffect(() => {
        // anterior.current = texto
    }, [texto])

    function executar() {
        anterior.current = texto // Salva o texto anterior quando eu clicar no botão
        // Essa alteração não provocou renderização, então devo editar o conteúdo da caixa de texto para que ocorra renderizção do compoente
    }

    return (
        <div className="componente">
            <h1>useRef - MUITA ATENÇÃO NO USO DO USEREF</h1>
            <hr />
            <input type="text" onChange={e => { setTexto(e.target.value) }} /><br />
            <hr />
            <button onClick={executar}>Salvar texto Anterior</button>
            <p>Texto: {texto} (anteriormente) {anterior.current}</p>
        </div>
    )
}