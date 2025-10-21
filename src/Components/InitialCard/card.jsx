import { Link } from "react-router-dom";


 const initialCard = [{
    id:1,
    name:"Lógica básica de programação",
    description:"Por onde um iniciante do zero deve começar",
    path:"/LogicaBasica"
}]  


export function InitialCard(){
    return(
        <div className=" flex bg-blue-900 rounded-xl w-1/4 m-auto max-w-[90%]">
         {initialCard.map(item=>(
              <section className="m-auto flex flex-col gap-10 p-4">
                    <h2>{item.name}</h2>
                     <p>{item.description}</p>
                    <Link className=' flex  bg-blue-500 w-1/2 text-[--font-color-secundary] rounded-lg self-center p-4 hover:bg-blue-900' to={item.path}>Iniciar estudos</Link>
                   
              </section>
              ))}
         </div>
    )
}