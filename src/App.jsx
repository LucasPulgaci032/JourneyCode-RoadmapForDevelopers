
import "./App.css";
import InicialPage from "./Pages/InicialPage";
import { useState } from "react";
import { BtnMenu, Menu } from "./Components/Menu";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";
import { RoadmapJs, RoadmapPython } from "./Pages/RoadmapLangPages/exportsRoad";



function App() {
 const [menu, setMenu] = useState(false)


 function toggleMenu(){
    setMenu(!menu)
  }
   
 

  return (
    <div>
     
     <BrowserRouter>

     <Menu className={`${menu ? "flex flex-col fixed z-50 w-[150px] h-[100%] bg-blue-700":"hidden"}`}/>
       
      <Routes> 
        <Route path='/' element={<InicialPage/>}/>    
        <Route path='/About' element={<AboutPage/>}/>
       
      </Routes>
      <Routes> {/*rotas dos roadmaps */}
          <Route path="/roadmapjs" element={<RoadmapJs/>}/>
          <Route path="/roadmappy" element={<RoadmapPython/>}/>
      </Routes>
        <BtnMenu className={`${menu ? "text-3xl p-4  text-[--font-color-primary] ml-[300px]":"text-3xl p-4  text-[--font-color-primary] "}`} onClick={toggleMenu}/>
     
    </BrowserRouter>
    
   
    
  </div>
  )
}

export default App
