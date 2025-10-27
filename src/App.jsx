
import "./App.css";
import InicialPage from "./Pages/InicialPage";
import { useState } from "react";
import { BtnMenu, Menu } from "./Components/Menu";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";
import { RoadmapGeneric } from "./Pages/RoadmapLangPages/RoadmapAPI";
import { InitialCardPage } from "./Components/InitialCard";


function App() {
 
  

const [menu, setMenu] = useState(false)

function toggleMenu(){
    setMenu(!menu)
  }
   
 

  return (
    <div>
     
     <BrowserRouter>

     <Menu className={`${menu ? "flex flex-col fixed z-50 w-[150px] h-[100%] bg-blue-700 border-4 border-solid border-[#2a84eb] animate-glow ":"hidden"}`}/>
       
      <Routes> 
        <Route path='/' element={<InicialPage/>}/>    
        <Route path='/About' element={<AboutPage/>}/> 
        <Route path='/LogicaBasica' element={<InitialCardPage/>}/>
        <Route path="/:name" element={<RoadmapGeneric/>}/>
      </Routes>
       
     
    </BrowserRouter>

    <BtnMenu onClick = {toggleMenu}/>
    
  </div>
  )
}

export default App


//cards[] → <Link to="/react"> → rota "/:name" → useParams() → fetch API → renderData → conteúdo dinâmico

{/*link to pega prop path de um array local e mapeado para cada card, a rota generica vai usar o valor do path do card que for clicado. UseParams vai pegar esse valor, o fetch vai buscar os dados da api e depois uma variavel vai guardar o valor filtrado que é condizente com o valor de nome
  
  
estudar react markDown
  
  */}