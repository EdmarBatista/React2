import React from "react";

import { Componente1, Componente2, Componente3 } from "./Varios_Componentes";

// Podemos criar vários componentes dentro de um arquivo, mas não é a prática mais indicada, o indicado é vários arquivos por componente

export default function App() {
    return (
        <>
            <h1>Múltiplos componentes no mesmo ficheiro</h1>
            <hr />
            <Componente1 />
            <Componente2 />
            <Componente3 />
        </>
    )
}
