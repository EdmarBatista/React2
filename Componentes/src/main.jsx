import React from "react";
import ReactDOM from 'react-dom/client' // Dois imports importantes do react

import App from './App';  // O nome do componente só veio agora, pois no App ela está como anônimo


ReactDOM.createRoot(document.querySelector('#root')).render( 
    <div>
        <App />
    </div>
)
