import React, { useState, useEffect } from 'react'
import User from './UseEffect_03_USER'
import '../App.css'

export default function App() {

    // state
    const [users, setUsers] = useState([])

    // effect
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(response => response.json())
            .then(json => {
                setUsers(json.users)
            })
    }, [])

    return (
        <div className="componente">
            <h1>useEffect - EXERCÍCIO DE LEITURA DE DADOS DE API NO USEEFFECT</h1>
            <h3>Usuários inscritos</h3>
            <hr />
            {users.slice(0, 5).map(user => { // O slice limita a 5 componentes
                return <User key={user.id} usuario={user} />
            })}
        </div>
    )
}