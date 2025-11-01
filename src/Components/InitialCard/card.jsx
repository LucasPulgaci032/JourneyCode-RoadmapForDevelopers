import { Link } from "react-router-dom";
import {stylesForInitialCardDiv, stylesForInitialCardLink } from "../../Styles/styles";



 const initialCard = [{
    id:1,
    name:"Lógica básica de programação",
    description:"Por onde um iniciante do zero deve começar",
    path:"/LogicaBasica"
}]  


export function InitialCard(){
    return(
        <div className={stylesForInitialCardDiv}>
         {initialCard.map(item=>(
              <section className="m-auto flex flex-col gap-10 p-4">
                    <h2>{item.name}</h2>
                     <p>{item.description}</p>
                    <Link className={stylesForInitialCardLink} to={item.path}>Iniciar estudos</Link>
                   
              </section>
              ))}
         </div>
    )
}