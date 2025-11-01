import{
    IoLogoJavascript,
    FaPython,
    FaJava
}from "../../Icons/exportIcons"
import { Link } from "react-router-dom"
import { styleForCard, styleForRoadmapCardsLink } from "../../Styles/styles"



const languages = [
    {id: 1,
    name:"Roadmap JavaScript",
    logo: <IoLogoJavascript/>,
    description:"A linguagem que domina a web",
    path:'/JavaScript'
},
  

    {id: 2,
    name:"Roadmap Python",
    logo: <FaPython/>,
    description:"A linguagem que domina data science",
    path:'/Python'
    },

    {id: 3,
    name:"Roadmap Java",
    logo: <FaJava/>,
    description:"A linguagem que move o mundo corporativo ",
    path:'/Java'
}

]


export function RoadmapCards({...props}){
    return(
        <section {...props} className='w-1/2 flex flex-col gap-4 self-center'>
            {languages.map((item)=>(
                <Card key={item.id}>
                    <h2>{item.name}</h2>
                    <span className='text-3xl'>{item.logo}</span>
                    <Link className={styleForRoadmapCardsLink} to={item.path}>Iniciar estudos</Link>
                    <p>{item.description}</p>
                </Card>
            ))}
        </section>
    )
}

 function Card({children}){
    return(
        <div className={styleForCard}>
            {children}
        </div>
    )
}