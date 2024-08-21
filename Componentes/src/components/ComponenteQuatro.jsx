import React from "react";
import ComponenteCinco from "./ComponenteCinco"
// Eu poderia ter importado o componente 5 dentro do App.jsx, mas o objetivo é encurtar o App, já que o componente5 está sendo usando dentro do componente4

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            {props.children}  {/* Mostra os filhos do meu componente, se eu só digitar dentro da abertura e fechamento da tag não vão aparecer, então tenho que mandar renderizar aqui */}
            <p className="titulo">Título: {props.titulo}</p>
            <ComponenteCinco texto="propriedade do componente" />

            <ComponenteCinco />
            <ComponenteCinco texto="propriedade do componente" />

        </div>
    )
}

export default ComponenteQuatro