import { CiMenuBurger } from "react-icons/ci"
import {Link} from "react-router-dom"
import ChangeBodyTheme from "../body"



const urls = [
    {id:1,
     name:"Inicio",
     path:"/"
    },
    {id:2,
     name:"Sobre",
     path:"/about"
    }
]



export function BtnMenu({onClick,...props}){

  

    return( 
        <button 
        {...props} 
        onClick={onClick} 
        className={`flex justify-end text-4xl p-4  bottom-0 right-0 fixed ${onClick ? "text-[--font-color-primary]" : "text-[--font-color-secundary]"}`}>
                <CiMenuBurger/>
        </button>
    )
}

export function Menu({...props}){


    return (
        <nav {...props}>
            {urls.map((item,index)=>(
                <Link key={index}to={item.path}>{item.name}</Link>
            ))}
             <ChangeBodyTheme>Alterar cor</ChangeBodyTheme>
        </nav>
    )
}