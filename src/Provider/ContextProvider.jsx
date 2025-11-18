import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import { createContext } from "react";
export const ThemeProvider = createContext()

export function ContextProvider({children}){
   
   
        const [color,setColor] = useState(true)
        
        function changeColor(){
          setColor(!color)
        }
        
        
        const [menu, setMenu] = useState(false)

        function toggleMenu(){
            setMenu(!menu)      
        }
        const location = useLocation()
        const scrollerToTop = window.onload= () => {
            window.scrollTo(0,0)
        }
        
        useEffect(()=>{
        document.body.className = `${color ? "bg-[#040727] text-[--font-color-secundary]"  : "bg-blue-100 text-[--font-color-primary]"}` //responsavel por cor de fundo e toggle de menu
        setMenu(false)//torna explicito o que ja fazia antes. O menu fechava por conta do re render da pagina baseado na alternancia da cor, agora fecha por esse setMenu
        },[color])

        useEffect(()=>{       
             scrollerToTop()
             setMenu(false) //torna explicito o que ja fazia antes
        },[location.pathname]) //responsavel por levar o scroll para cima sempre que a url muda

        // Se colocasse tudo dentro de um só useEffect daria conflito pois tudo seria executado se apenas uma coisa mudasse

    return(

        <ThemeProvider value={{color, changeColor, menu, toggleMenu, setMenu}}>
            {children}
        </ThemeProvider>
    )
}