/* 
O atributo ref é uma ferramenta poderosa que permite acessar e interagir diretamente com os nós do DOM (Document Object Model) criados por componentes React. Vamos explorar como ele funciona:

O que é ref?
    * O atributo ref é usado para obter uma referência a um elemento do DOM ou a um componente React específico.
    * Ele permite que você acesse diretamente o nó do DOM associado a um componente, mesmo quando essa interação está fora do fluxo normal de dados do React.
Quando usar ref?
    Existem várias situações em que o uso de ref é útil:
    * Gerenciamento de foco: Você pode usar ref para definir o foco em um campo de entrada (input) ou em outro elemento.
    * Seleção de texto: É possível usar ref para selecionar ou manipular o texto dentro de um elemento.
    * Integração com bibliotecas DOM de terceiros: Quando você precisa interagir com bibliotecas ou plugins externos que manipulam o DOM diretamente.
*/
import React, { useState, useEffect, useRef } from 'react'
export default function App() {

    const [texto, setTexto] = useState('')
    const inputRef = useRef()
    const input2Ref = useRef()

    function focus1() {
        inputRef.current.focus()
    }

    function alterar_texto_2() {
        input2Ref.current.value = "João Ribeiro"
        input2Ref.current.focus()
    }

    return (
        <div className="componente">
            <h1>useRef - UTILIZAÇÃO MAIS COMUM DO USEREF</h1>
            <hr />
            <input ref={inputRef} type="text" value={texto} onChange={evento => { setTexto(evento.target.value) }} /><br />
            <input ref={input2Ref} type="text" />
            <hr />
            <button onClick={focus1}>Focus 1</button>
            <button onClick={alterar_texto_2}>Alterar o texto do input 2</button>
        </div>
    )
}