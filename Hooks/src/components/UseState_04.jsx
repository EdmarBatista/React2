import React, { useState } from 'react'

export default function App() {

    const [player, setPlayer] = useState({
        name: "Joao",
        score: 0
    })

    // Como para alterar um objeto tenho que voltar todo o objeto, às vezes é melhor criar um state para cada elemento
    const [playerName, setPlayerName] = useState("Joao")
    const [playerScore, setPlayerScore] = useState(0)

    function alterar() {

        setPlayer(pa => {
            //quando eu fizer o return do objeto que quero alterar eu devo manter as propriedades anterirores e alterar a propriedade que eu quero que mude
            return {
                ...pa,     //  Mantenho todas as propriedades
                score: pa.score + 1   // Altero só a propriedade score
            }
        })


        setPlayerName('Joaquim')
        setPlayerScore(playerScore + 1)
    }

    return (
        <div className="componente">
            <h1 className='titulo'>useState - ALTERANDO STRINGS E OBJETOS</h1>
            <hr />
            <h3>Nome: {player.name}</h3>
            <h3>Pontos: {player.score}</h3>

            <h3>Nome: {playerName}</h3>
            <h3>Pontos: {playerScore}</h3>
            <button onClick={alterar}>Alterar a pontuação</button>
        </div>
    )
}