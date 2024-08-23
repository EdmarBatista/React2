

import React, { useState, useEffect, useRef } from 'react'




export default function App() {


    return (
        <div className="componente">
            {/* Descomentar para Usar o CDN do bootstrap   Não estou usando pois ele muda o visual de todos os meus componentes*/}

            {/* 

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" ></script> 
            
            */}

            <h1>Bootstrap</h1>
            <hr />

            <a className='btn btn-primary'>Botão de Bootstrap</a>
            <div className="alert alert-success">Operação realizada com sucesso</div>

        </div>
    )
}