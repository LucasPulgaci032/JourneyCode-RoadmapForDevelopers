import { useContext } from "react"
import { ThemeProvider } from "../../Provider/ContextProvider"



function ChangeBodyTheme({children,...props}){

        const {changeColor} = useContext(ThemeProvider)

    return(
            <button {...props} className=" text-black bg-blue-300 rounded-lg w-1/2 m-2 font-[Orbitron] tracking-wide absolute bottom-0" onClick={changeColor} >{children}</button>
    )
}

export default ChangeBodyTheme