import React, { useState } from 'react'

import {v4 as uuid} from 'uuid'

// Tem que executar npm install uuid

export default function () {

    const [nome, setNome] = useState('')
    const [nomes, setNomes] = useState([])

    function guardarNome() {
        setNomes(tmp => [...tmp, nome])
    }

    return (
        <div className="componente">
            <h1>USAR O NPM PARA ADICIONAR UUID</h1>
            <hr />
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} />
            <button onClick={guardarNome}>Guardar nome</button>
           <hr />
            {nomes.map(nome => <p key={uuid()}>{nome}</p>)}
            <p> Cada renderização gera outro uuid: {uuid()}</p>

        </div>
    )
}