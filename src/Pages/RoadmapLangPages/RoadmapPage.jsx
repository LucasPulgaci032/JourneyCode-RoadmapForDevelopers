import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { LangsContainer, LangTitle, LangDescription, LangTopics, TopicsTitle } from "../../RoadmapComponents/exports.js"
import ReactMarkdown from 'react-markdown'
import { roadmapContent } from "./roadmapContent.ts";
import { classJava} from "./roadmapContent.ts"
import { SectionCode } from "../../RoadmapComponents/SectionCode/SectionCode.jsx";
import {ToggleSectionCode } from "../../Components/ToggleSectionCode/ToggleSectionCode.jsx";


export function RoadmapGeneric(){


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


const topicName = ["Variáveis","Tipos de dados"]
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


            {roadmapContent.filter(param => param.language === name).map((codeTopic,idx) => {
            
                 
                   
                return( 
                    Object.entries(render.topics).slice(1,-2).map(([tpc,description],tpcIdx)=>
                
                <div className="flex flex-col gap-8 w-full " key={`${idx}-${tpcIdx}`}> {/*as keys devem estar no pai */}
                <TopicsTitle>
                {topicName[tpcIdx]}
                </TopicsTitle>
                <LangTopics>
                    {description}
                </LangTopics>
                    <SectionCode>
                       {topicName[tpcIdx]}
                    <ToggleSectionCode code = {codeTopic[tpc]?.code}/>                        
                    </SectionCode>
                
                </div>
           ))} )}      
                            
    </LangsContainer>

    )

}
