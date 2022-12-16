import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./App.styles";

import 

function App() {

   return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      // <Routes>
      //   <Route path="/" element={<Login/>}></Route>
      //   <Route path="/cadastro" element={<Cadastro />}></Route>
      //   <Route path="/habitos" element={<Habitos />}></Route>
      //   <Route path="/hoje" element={<Hoje />}></Route>
      //   <Route path="/historico" element={<Historico />}></Route>
      // </Routes>
    </BrowserRouter>
  );
  
}

export default App;