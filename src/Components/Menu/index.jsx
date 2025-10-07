import { CiMenuBurger } from "react-icons/ci"
import {Link} from "react-router-dom"


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
        className={`text-3xl p-4 ${onClick ? "ml-[300px] text-[--font-color-primary]" : "ml-[0px] text-[--font-color-primary]"}`}>
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
        </nav>
    )
}