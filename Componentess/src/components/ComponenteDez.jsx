import React from "react"

export default (props) => {

    const estilos = {
        color: props.corTexto,
        padding: "20px",
        backgroundColor: "gray"
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {/* Não posso colocar style="color :red"
            Devo passar um objeto
            em vez de background-color devo usar backgroundColor*/}
            <p style={{ color: props.corTexto, padding: "20px", backgroundColor: "gray" }}>Texto do parágrafo</p>
            {/* Também posso pasar por meio de uma variável */}
            <p style={estilos}>Texto do parágrafo</p>


        </div>
    )
}