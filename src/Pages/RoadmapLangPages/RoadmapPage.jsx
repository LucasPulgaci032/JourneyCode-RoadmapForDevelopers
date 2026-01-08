import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { LangsContainer, LangTitle, LangDescription, LangTopics, TopicsTitle } from "../../RoadmapComponents/exports.js"
import ReactMarkdown from 'react-markdown'

import { varAndConstsJS, varAndConstsPy, varAndConstJava, classJava, dataTypesCodeJS } from "./roadmapContent.ts"
import { SectionCode } from "../../RoadmapComponents/SectionCode/SectionCode.jsx";
import {ToggleSectionCode } from "../../Components/ToggleSectionCode/ToggleSectionCode.jsx";

export function RoadmapGeneric(){

const roadmapContent = [
    {JavaScript : [varAndConstsJS,dataTypesCodeJS]},
    {Python : [varAndConstsPy,'avc']},
    {Java: [varAndConstJava,'asc']},
   
]

 const { name } = useParams()


const[renderData, setRenderData] = useState([])
const [error,setError] = useState(false)
const [loading,setLoading] = useState(true)






useEffect(()=>{
    setTimeout(()=>{ 
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
},[name,location.pathname])

    

 if(loading) return <p className="text-4xl text-center mt-[10%]">carregando...</p>
 if(error) return <p>erro</p>

    const render = renderData.find(item => item.name === name)
   
    const javaClass = name == "Java" ? classJava : null
  
  
if (!render) return <p>Item não encontrado</p>
    return(

    <LangsContainer>
        <LangTitle>{render.name}</LangTitle>
        <LangDescription>{render.description}</LangDescription>
          {javaClass ? 
          <SectionCode>
            <ReactMarkdown>
                {javaClass}
            </ReactMarkdown>
          </SectionCode> :
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
                <SectionCode key={idx}>
                   <ReactMarkdown >
                        {param[name][0]}
                   </ReactMarkdown> {/*precisa de [name] para acessar o conteudo do objeto, sem ele, acessa o objeto , o que o ractMarkdown não renderiza */}
                </SectionCode>
            ))}
       
            <TopicsTitle>Tipos de dados</TopicsTitle>
                <LangTopics>
                 {render.topics[0].dataTypes}
                </LangTopics>
                
                 {roadmapContent.filter(param => param[name]).map((param,idx) =>{
                   const code = param[name][1]
                   
                   
                  return(
                     <SectionCode key={idx}>
                         <LangDescription>Tipos de dados</LangDescription>
                       <ToggleSectionCode code = {code}/>
                        
                    </SectionCode>
                    )})
                    } 
                     
                 
                   
               
                 
        </div>
          
    </LangsContainer>

    )

}
{/*armazenar a logica de renderização condicional dentro do componente evitando reescrever codigo */}