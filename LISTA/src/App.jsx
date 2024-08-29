import React, { useState, useRef } from "react"
import ListaContactos from "./components/ListaContacto"
import Contacto from "./components/Contacto"

import { v4 as chave } from 'uuid'
function App() {

    // states
    const [contacto, setContacto] = useState({ nome: '', telefone: '' })
    const [listaContactos, setListaContactos] = useState([])

    // useRef
    const inputNome = useRef()
    const inputTelefone = useRef()

    // métodos
    function definirNome(event) {
        setContacto({ ...contacto, nome: event.target.value })
    }
    function definirTelefone(event) {
        setContacto({ ...contacto, telefone: event.target.value })
    }

    function adicionarContato() {

        // Validação dos campos
        if (contacto.nome === "" || contacto.telefone === "") {
            return
        }

        // Verificar se o contacto já existe
        let duplicado = listaContactos.find((ct) => ct.nome === contacto.nome && ct.telefone === contacto.telefone)  // Se não existir vai retornar undefined
        //console.log(duplicado)
        if (typeof (duplicado) !== 'undefined') {
            inputTelefone.current.focus()
            return
        }

        // Adicionar novo contato à lista
        setListaContactos([...listaContactos, contacto])

        // Limpar o concacto
        setContacto({ nome: '', telefone: '' })

        // Colocar focus no input nome
        inputNome.current.focus()
    }


    return (
        <>
            <h1>Minha lista de contatos</h1>
            <hr />
            <div>
                <label >Nome:<br /></label>
                <input type="text" ref={inputNome} onChange={definirNome} value={contacto.nome} />
            </div>
            <div>
                <label >Telefone:<br /></label>
                <input type="text" ref={inputTelefone} onChange={definirTelefone} value={contacto.telefone} />
            </div>
            <button onClick={adicionarContato}>Adicionar Concacto</button>
            <hr />
            {/* <ListaContactos listaContactos={listaContactos} /> */}
            {/* Apresentação da lista de contactos  */}
            {listaContactos.map(ct => {
                return <Contacto key={chave()} nome={ct.nome} telefone={ct.telefone} />
            })}


        </>
    )
}

export default App
