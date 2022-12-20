import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Hoje from "./Pages/Hoje/Hoje";
import Habitos from "./Pages/Habitos/Habitos";
import Historico from "./Pages/Historico/Historico";

import AppProvider from "./AppContext/Provider";
import GlobalStyle from "./Reset";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <AppProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/hoje' element={<Hoje/>}/>
      <Route path='/habitos' element={<Habitos/>}/>
      <Route path='/historico' element={<Historico/>}/>
    </Routes>
    </AppProvider>
    </BrowserRouter>
    </>
  );
}

///ocorre header invalido quando esta deslogado