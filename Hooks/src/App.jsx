import React from "react"
import './App.css'

// componentes

import HookState01 from "./components/UseState_01"
import HookState02 from "./components/UseState_02"
import HookState03 from "./components/UseState_03"
import HookState04 from "./components/UseState_04"
import HookEffect01 from "./components/UseEffect_01"
import HookEffect02 from "./components/UseEffect_02"
import HookEffect03 from "./components/UseEffect_03"
import HookRef01 from "./components/UseRef_01"
import HookRef02 from "./components/UseRef_02"
import HookRef03 from "./components/UseRef_03"
import ToDoList from "./components/ToDoList"
import UseMemo from "./components/UseMemo"
import UseReducer01 from "./components/UseReducer_01"
import UseReducer02 from "./components/UseReducer_02"
import UniqueID from "./components/UniqueID"
import TemaClaroEscuro from "./components/TemaClaroEscuro"
import Tabuada from "./components/Tabuada"
import UseCallback from "./components/UseCallback"
import Use_ID from "./components/Use_Id"
import Varios from "./components/Varios"
import Bootstrap from "./components/Bootstrap"


//import HookRef16 from './components/UseRef_16'
//import HookEffect17 from './components/UseEffect_17'


function App() {
    return (
        <>
            <HookState01 />
            <HookState02 />
            <HookState03 />
            <HookState04 />
            <HookEffect01 />
            <HookEffect02 />
            <HookEffect03 />
            <HookRef01 />
            <HookRef02 />
            <HookRef03 />
            <ToDoList />
            <UseMemo />
            <UseReducer01 />
            <UseReducer02 />
            <UniqueID />
            <TemaClaroEscuro />
            <Tabuada />
            <UseCallback />
            <Use_ID />
            <Bootstrap />
        </>
    )
}

export default App
