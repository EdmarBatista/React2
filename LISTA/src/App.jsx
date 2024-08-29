import React, { useState, useRef, useEffect } from "react"
import ListaContactos from "./components/ListaContacto"
import Contacto from "./components/Contacto"

import { v4 as chave } from 'uuid'
function App() {

    // states
    const [contacto, setContacto] = useState({ id: "", nome: '', telefone: '' })
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
        setListaContactos([...listaContactos, { ...contacto, id: chave() }]) // usei um spread operator na lista no no objeto contacto

        // Limpar o concacto
        setContacto({ nome: '', telefone: '' })

        // Colocar focus no input nome
        inputNome.current.focus()
    }

    function enterAdicionarContacto(event) {
        if (event.code === "Enter") {
            adicionarContato()
        }
    }

    // Carregar a listaContactos do localStorage
    // A ordem dos useEffects importa, então tive que colocar esse antes do useEffect abaixo
    useEffect(() => {
        if (localStorage.getItem('meus_contactos') !== null) {
            setListaContactos(JSON.parse(localStorage.getItem("meus_contactos")))
        }
    }, []) // Vai ser executado quando a aplicação for iniciada


    // Persistência do state
    // Atualizar a lista de contactos no localStorage
    useEffect(() => {
        localStorage.setItem('meus_contactos', JSON.stringify(listaContactos))
    }, [listaContactos])

    // Limpar toda a lista
    function limparStorage() {
        // localStorage.clear('meus_contactos')  // Se eu fizrer assim quando eu modificar um contato vai adicionar tudo denovo
        setListaContactos([])
    }

    /*    // Remover um contacto da lista por chave e valor
       function removerContacto(ctRemover){
         //  console.log(ctRemover)
         let tmp = listaContactos.filter(ct => ct.nome!==ctRemover.nome && ct.telefone !== ctRemover.telefone) // Constroi uma lista temporária sem o elemento com o nome e telefone passado
         setListaContactos(tmp)
   
       } */

    function removerContacto(id) {
        let tmp = listaContactos.filter(ct => ct.id !== id)
        setListaContactos(tmp)

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
                <input type="text" ref={inputTelefone} onChange={definirTelefone} onKeyUp={enterAdicionarContacto} value={contacto.telefone} />
            </div>
            <button onClick={adicionarContato}>Adicionar Concacto</button>
            <button onClick={limparStorage}>Limpar Lista</button>
            <hr />
            {/* <ListaContactos listaContactos={listaContactos} /> */}
            {/* Apresentação da lista de contactos  */}
            {listaContactos.map(ct => {

                // return <Contacto key={chave()} nome={ct.nome} telefone={ct.telefone} remover={removerContacto} />   // Usado quando eu removia os elemntos da lista por meio da nome  e telefone
                return <Contacto key={ct.id} id = {ct.id} nome={ct.nome} telefone={ct.telefone} remover={removerContacto} />


            })}


        </>
    )
}

export default App
