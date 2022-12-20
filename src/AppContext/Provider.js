import AppContext from "./Context";
import React from "react";
import { useState } from "react";
export default function AppProvider({children}){
    const [tok, setTok] = useState('')
    const [im, setIm] = useState('')
    const [save, setSave] = useState('')
    const [reloadV, setReloadV] = useState(0)
    const [reloadH, setReloadH] = useState(0)
    const [nomeH, setnomeH] = useState('')
    const [dias, setDias] = useState([])
    const [hojeFeitos, setHojeFeitos] = useState([])
    const [hojeTotal, setHojeTotal] = useState(0)
    const obj = {
        token: tok,
        image: im
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${tok}`
        }
    }
    
    return (
        <AppContext.Provider value={{obj, reloadH, setReloadH, setTok, setIm, setSave, save, config, reloadV, setReloadV, nomeH, setnomeH, dias, setDias, hojeFeitos, setHojeFeitos, hojeTotal, setHojeTotal}}>
            {children}
        </AppContext.Provider>
    )
}