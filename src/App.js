import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Hoje from "./Pages/Hoje";
import Habitos from "./Pages/Habitos";
import Historico from "./Pages/Historico";

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

