import AppContext from "./Context";
import React from "react";
import { useState } from "react";


export default function AppProvider({children}){
    const [token, setToken] = useState('')
    const [im, setIm] = useState('')
    const [save, setSave] = useState('')
    const [reload, setreload] = useState(0)
    const [reloadHoje, setreloadHoje] = useState(0)
    const [tarefa, settarefa] = useState('')
    const [dias, setDias] = useState([])
    const [Feito, setFeito] = useState([])
    const [diaFeito, setdiaFeito] = useState(0)
    const obj = {
        token: token,
        image: im
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    
    return (
        <AppContext.Provider 
            value={{obj, reloadHoje, setreloadHoje, setToken, setIm, setSave, save, config, reload, setreload, tarefa, settarefa, dias, setDias, Feito, setFeito, diaFeito, setdiaFeito}}>
            {children}
        </AppContext.Provider>
    )
}