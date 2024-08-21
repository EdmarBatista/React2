import React from "react"
// O componenteB é importado dentro do componenteA
export default (props) => {

    var valor1 = 100

    function executar() {
        valor1 = Math.random()
        props.funcao('Valor: ' + valor1, 'joao') // Chama a função do componente pai e passa dois parametros
    }

    return(
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <button onClick={executar}>Executar</button>
            <p>{valor1}</p> {/* Esse valor continua sendo 100, pois o valor1 foi alterado somente dentro da chamada da função executar */}
        </div>
    )
}