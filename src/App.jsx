
import "./App.css";
import InicialPage from "./Pages/InicialPage";
import { useContext, useEffect} from "react";
import { BtnMenu, Menu } from "./Components/Menu";
import {Routes,Route, useLocation } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";
import { RoadmapGeneric } from "./Pages/RoadmapLangPages/RoadmapAPI";
import { InitialCardPage } from "./Components/InitialCard";
import { ThemeProvider } from "./Provider/ContextProvider";



function App() {
 

   const {menu,toggleMenu,setMenu} = useContext(ThemeProvider)
   const location = useLocation();

   useEffect(()=>{ 
      if(menu) setMenu(!menu)
   },[location.pathname])
  
  return (
    <div>

     <Menu  className={`${menu ? "flex flex-col fixed z-50 w-[150px] h-[100%] bg-blue-700 border-4 border-solid border-[#2a84eb] animate-glow ":"hidden"}`}/>
      <Routes> 
        <Route path='/' element={<InicialPage/>}/>    
        <Route path='/About' element={<AboutPage/>}/> 
        <Route path='/LogicaBasica' element={<InitialCardPage/>}/>
        <Route path="/:name" element={<RoadmapGeneric/>}/>
      </Routes>
       
    <BtnMenu onClick = {toggleMenu}/>
    
  </div>
  )
}

export default App

