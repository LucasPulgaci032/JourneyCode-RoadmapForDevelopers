
import './App.css'
import StartComponents from './Components'
import ChangeBodyTheme from './Components/body'
import { useState } from 'react'
import { BtnMenu, Menu } from './Components/Menu'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 const [menu, setMenu] = useState(false)
 const [color,setColor] = useState(true)

 function toggleMenu(){
   setMenu(!menu)
 }

function changeColor(){
  setColor(!color)
}

  return (
    <div className={`flex flex-col p-4  ${color ? "bg-white text-[--font-color-primary]" : "bg-[#040727] text-[--font-color-secundary]"}`}>
     
     <BrowserRouter>

     <Menu className={`${menu ? "flex flex-col fixed z-50 w-1/6 h-[100%] bg-blue-700":"hidden"}`}/>
      <Routes>
        <Route path='/' element={<StartComponents/>}/>    
        
      </Routes>


     
    </BrowserRouter>
    
     <section className='w-1/5 flex flex-col self-end'>
      <ChangeBodyTheme onClick = {changeColor}>alterar cor</ChangeBodyTheme>
      <BtnMenu onClick={toggleMenu}/>
     </section>
  </div>
  )
}

export default App
