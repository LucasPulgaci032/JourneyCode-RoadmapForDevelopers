
import "./App.css";
import InicialPage from "./Pages/InicialPage";
import { useState, useEffect } from "react";
import { BtnMenu, Menu } from "./Components/Menu";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";
import { RoadmapJs, RoadmapPython } from "./Pages/RoadmapLangPages/exportsRoad";
import ChangeBodyTheme from '../src/Components/body/index'


function App() {
 



const [color,setColor] = useState(true)

function changeColor(){
  setColor(!color)
}

useEffect(()=>{
  document.body.className = `${color ? "bg-white text-[--font-color-primary]" : "bg-[#040727] text-[--font-color-secundary]" }`
  
},[color])

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
       
      </Routes>
      <Routes> {/*rotas dos roadmaps */}
          <Route path="/roadmapjs" element={<RoadmapJs/>}/>
          <Route path="/roadmappy" element={<RoadmapPython/>}/>
      </Routes>
       
     
    </BrowserRouter>
    <ChangeBodyTheme onClick = {changeColor}>Alterar cor</ChangeBodyTheme>
    <BtnMenu onClick = {toggleMenu}/>
    
  </div>
  )
}

export default App
