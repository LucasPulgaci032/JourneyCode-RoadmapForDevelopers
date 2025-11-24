import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LangsContainer, LangTitle, LangDescription, LangTopics, TopicsTitle } from "../../RoadmapComponents/exports"
import ReactMarkdown from 'react-markdown'
import { ThemeProvider } from "../../Provider/ContextProvider"
import { stylesForDivCode1, stylesForDivCode2 } from "../../Styles/styles"
import { varAndConstsJS, varAndConstsPy, varAndConstJava, classJava } from "./roadmapContent.ts"

export function RoadmapGeneric(){

const roadmapContent = [
    {JavaScript : varAndConstsJS},
    {Python : varAndConstsPy},
    {Java: varAndConstJava}
]


const[renderData, setRenderData] = useState([])
const [error,setError] = useState(false)
const [loading,setLoading] = useState(true)

const {color} = useContext(ThemeProvider)
const { name } = useParams()

useEffect(()=>{
    setTimeout(()=>{ //setTimeout só para ilustrar o assincrono do fetch
    async function fetchLang(){
        try{
            const res = await fetch('http://localhost:3000/roadmaps')
            if(!res.ok){
                setError(true)
                return
            }
            const data = await res.json()
            setRenderData(data)
        }catch(error){
            setError(true)
        }finally{
            setLoading(false)
        }
    }
 

    fetchLang()
  
    },500)
},[name])


    

 if(loading) return <p className="text-4xl text-center mt-[10%]">carregando...</p>
 if(error) return <p>erro</p>
//armazenr os dados da api num array de objeto para ser mapeado
    const render = renderData.find(item => item.name === name)
   
    const javaClass = name == "Java" ? classJava : null
  
  
if (!render) return <p>Item não encontrado</p>
    return(

    <LangsContainer>
        <LangTitle>{render.name}</LangTitle>
        <LangDescription>{render.description}</LangDescription>
          {javaClass ? 
          <section  className={color ? stylesForDivCode1 : stylesForDivCode2}>
           <ReactMarkdown>
                {javaClass}
           </ReactMarkdown>
          </section> :
          null
        }
              <div className="flex flex-col gap-8 max-w-[90%]
            min-w-[90%] ">
            <TopicsTitle>
                Variáveis
            </TopicsTitle>
        <LangTopics>
            {render.topics[0].varAndConsts}
        </LangTopics>
        
            {roadmapContent.filter(param => param[name]).map((param,idx) => (
                <section key={idx} className={color ? stylesForDivCode1 : stylesForDivCode2}>
                   <ReactMarkdown >{param[name]}</ReactMarkdown> {/*precisa de [name] para acessar o conteudo do objeto, sem ele, acessa o objeto , o que o ractMarkdown não renderiza */}
                </section>
            ))}
       
            <TopicsTitle>Tipos de dados</TopicsTitle>
        <LangTopics>
            {render.topics[0].dataTypes}
        </LangTopics>
        </div>
          
    </LangsContainer>

    )

}
{/*criar array dinamico para ser renderizado : facilita! */}