import { useState, useEffect } from "react";

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

        useEffect(()=>{
        document.body.className = `${color ? "bg-[#F5F5F5] text-[--font-color-primary]" : "bg-[#040727] text-[--font-color-secundary]" }`
        
        },[color,menu])
   
    return(

        <ThemeProvider value={{color, changeColor, menu, toggleMenu, setMenu}}>
            {children}
        </ThemeProvider>
    )
}