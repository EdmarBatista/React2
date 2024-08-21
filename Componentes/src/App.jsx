import React from "react"
import './App.css'

// componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponenteQuatro"
// import ComponenteCinco from "./components/ComponenteCinco"  //O ComponenteCinco é importado dentro do ComponenteQuatro
import ComponenteSeis from "./components/ComponenteSeis"
import ComponenteSete from "./components/ComponenteSete"
import ComponenteOito from "./components/ComponenteOito"
import ComponenteNove from "./components/ComponenteNove"
import ComponenteDez from "./components/ComponenteDez"

import ComponentePai from "./components/comunicacao_direta/ComponentePai"
import ComponenteMae from "./components/comunicacao_indireta/ComponenteMae"

import ComponenteA from "./components/comunicacao_indireta_2/ComponenteA"

import ComponenteAvoA from "./components/comunicacao_direta_2/ComponenteAvoA" // Não é uma nova forma de comunicação direta, mas é um exemplo para vermos a complexidade que podemos ter

function App() {
    return (
        <>
            <ComponenteAvoA titulo="Comunicação Direta v2"/>

            <ComponenteA titulo="Comunicação Indireta v2"></ComponenteA>

            <ComponenteMae titulo="Comunicação Indireta"></ComponenteMae>{/* Chama o ComponenteFilha dentro dele */}

            <ComponentePai titulo="Comunicação Direta"></ComponentePai> {/* Chama o ComponenteFilho dentro dele */}

            <ComponenteDez titulo="Componente Dez - COMO DEFINIR ESTILOS INLINE COM STYLE NO JSX" corTexto="green" />

            <ComponenteNove titulo="Componente nove - INSTRUÇÃO CONDICIONAL VERSAO 3" valor="Carlos" />
            <ComponenteNove titulo="Componente nove - INSTRUÇÃO CONDICIONAL VERSAO 3" valor="Ana" />

            <ComponenteOito titulo="Componente oito - INSTRUÇÃO CONDICIONAL VERSAO 2" valor="Joaquim" />

            <ComponenteSete titulo="Componente sete - INSTRUÇÃO CONDICIONAL VERSAO 1" valor={1} />

            <ComponenteSeis titulo="Componente seis - COMPONENTE COM COLEÇÃO DE DADOS" />

            <ComponenteQuatro titulo="Componente quatro - PROPS CHILDREN E COMPONENTES DENTRO DE COMPONENTES"> {/* O componente 5 está sendo chamando do componente4 */}
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <br></br>
            </ComponenteQuatro>

            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />

            <ComponenteDois />

            <ComponenteUm />
        </>
    )
}

export default App