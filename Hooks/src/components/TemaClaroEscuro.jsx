import React, { useState } from 'react'


export default function () {

    const [escuro, setEscuro] = useState(true)

    const tema = {
        backgroundColor: escuro ? "black" : "white",
        color: escuro ? "white" : "black",
        borderRadius:"10px",
        padding:"20px"
    }

    return (
        <div style={tema}>
            <h1>React - Tema Claro / Escuro</h1>
            <hr />
            <button onClick={() => { setEscuro(!escuro) }}>Tema</button>
            <p style={{ textAlign: "justify", padding:"20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas eum eaque, repellat doloribus voluptatem tenetur similique laborum minima ad id ut necessitatibus dolor, nemo incidunt molestiae. Itaque, ratione sapiente.
                Officiis molestias quae mollitia. Rem ipsam ex sint animi suscipit quas soluta blanditiis? Neque, aliquam. Repellendus ex mollitia ipsam, ea doloribus est ratione itaque ullam optio minus eaque, nobis aut.
                Similique, vel! Beatae eum nam natus quae veniam ab reiciendis voluptate harum tenetur cumque eligendi, odit fuga debitis delectus dolor totam quos sint perspiciatis. Quod dolore quis veniam eius aliquid.
                Perferendis voluptate eum est veritatis soluta consequuntur unde repudiandae temporibus. Amet harum veniam a nesciunt explicabo neque quam nostrum iste reiciendis. Nam vero harum perferendis explicabo animi, maiores repudiandae quasi.
                Dolorum, quibusdam. Voluptatibus eos ipsam voluptas incidunt similique quae nihil voluptatum reiciendis quod assumenda laborum nam iste perferendis sed doloremque doloribus facilis quibusdam unde, sint possimus. Quae quasi iste nisi.
                Dolorum explicabo, quam impedit nihil quod iure voluptates dolorem repellat iusto autem voluptatum voluptate non aspernatur ad. Impedit consequatur ipsa magni quos omnis placeat. Aliquam iste blanditiis eaque saepe vel.
                Ratione aperiam eveniet maxime hic iusto sint modi consectetur, placeat officia animi quo expedita magnam cum consequatur voluptate illum alias, dignissimos voluptatum. Illo soluta cupiditate nisi iure odit nostrum consequuntur!
                Rem reprehenderit maxime eaque beatae in et voluptatum, tempora esse voluptas! Earum perferendis minus quo cumque sed eaque minima debitis magnam repudiandae quia, eum, similique non omnis aspernatur pariatur explicabo.
                Recusandae porro itaque iste nam suscipit tenetur hic debitis eius possimus harum? Corrupti ullam architecto voluptate ratione velit totam unde illum laudantium optio veniam, eos perferendis, voluptas laboriosam. Quidem, eaque!
                Expedita laudantium, eaque reprehenderit inventore quisquam consequatur corrupti quam. Cumque laborum rerum porro totam inventore! Qui sunt omnis, quia sit, eos libero neque veniam quae animi suscipit ex! Rerum, excepturi.</p>

        </div>
    )
}