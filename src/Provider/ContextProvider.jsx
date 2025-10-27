import { useState, useEffect } from "react";

import { createContext } from "react";

export const ThemeProvider = createContext()

export function ContextProvider({children}){
   
   
        const [color,setColor] = useState(true)
        
        function changeColor(){
          setColor(!color)
        }
        
      

        useEffect(()=>{
        document.body.className = `${color ? "bg-[#F5F5F5] text-[--font-color-primary]" : "bg-[#040727] text-[--font-color-secundary]" }`
        
        },[color])
   
    return(

        <ThemeProvider value={{color, changeColor}}>
            {children}
        </ThemeProvider>
    )
}