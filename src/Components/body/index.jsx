import { useContext } from "react"
import { ThemeProvider } from "../../Provider/ContextProvider"
import { styleForChangeBodyTheme } from "../../Styles/styles"



function ChangeBodyTheme({children,...props}){

        const {changeColor} = useContext(ThemeProvider)

    return(
            <button {...props} className={styleForChangeBodyTheme} onClick={changeColor} >{children}</button>
    )
}

export default ChangeBodyTheme