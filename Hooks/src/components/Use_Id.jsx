/* O useId é um hook do React introduzido no React 18 que gera identificadores únicos estáveis, úteis em situações onde você precisa associar elementos HTML de maneira consistente e única.

Principais usos do useId:
   1 Associação de Elementos em Formulários:
    Em formulários, é comum associar um <label> a um <input> utilizando o atributo for (ou htmlFor no React). O useId garante que esses identificadores sejam únicos e que a associação funcione corretamente, mesmo que o componente seja renderizado várias vezes.
 
    2 Evitar Colisões de IDs:
    Quando você precisa gerar múltiplos elementos com IDs em um componente (como ao renderizar uma lista de itens), o useId evita colisões de IDs que poderiam ocorrer se você simplesmente gerasse IDs manualmente ou usasse o índice de uma lista.

    3 Acessibilidade:
    Usar IDs únicos e consistentes é essencial para acessibilidade (a11y), especialmente para leitores de tela. O useId ajuda a garantir que os identificadores sejam únicos na árvore de componentes.

Benefícios de useId:
    1 Estabilidade: A ID gerada por useId é estável entre renderizações. Mesmo se o componente for re-renderizado, a ID gerada permanece a mesma, garantindo consistência.

    2 Evita Duplicação: Em componentes complexos ou reutilizáveis, o useId ajuda a evitar problemas de duplicação de IDs, que poderiam causar comportamentos inesperados.
 
    */



import React, { useId } from 'react'
export default function App() {

    const idLista = useId()
    const items = ['Item 1', 'Item 2', 'Item 3'];


    const id1 = useId()
    const id2 = useId()


    return (
        <div className="componente" >
            <h1>useId</h1>
            <hr />
            <form action="#" method='post'>

                <input type="checkbox" name="check_masculino" id="aaa" />
                <label htmlFor="aaa">Texto da checkbox</label>

                <div>
                    <input type="checkbox" name="check_masculino" id={id1} />
                    <label htmlFor={id1}>Texto da checkbox 1</label>
                </div>
                <div>
                    <input type="checkbox" name="check_masculino" id={id2} />
                    <label htmlFor={id2}>Texto da checkbox 1</label>
                </div>
            </form>


            {/* Exemplo para gerar uma lista */}
            <ul>
                {items.map((item, index) => (
                    // useId garante que cada item terá uma ID única e estável
                    // Aqui estamos combinando a ID gerada com o índice para garantir unicidade
                    <li key={`${idLista}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    )
}