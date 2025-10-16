import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LangsContainer, LangTitle, LangDescription, LangTopics } from "../../RoadmapComponents/exports"



export function RoadmapGeneric(){

const[renderData, setRenderData] = useState([])
const [error,setError] = useState(false)
const [loading,setLoading] = useState(true)


const { name } = useParams()

useEffect(()=>{
    async function fetchLang(){
        try{
            const res = await fetch('http://localhost:3000')
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
},[name])



 if(loading) return <p>carregando...</p>
 if(error) return <p>erro</p>

    const render = renderData.find(item => item.name === name)
if (!render) return <p>Item não encontrado</p>
    return(
    <LangsContainer>
        <LangTitle>{render.name}</LangTitle>
        <LangDescription>{render.description}</LangDescription>
            <h2 className="text-3xl">Topicos</h2>
        <LangTopics>
            {render.topics}
        </LangTopics>
    </LangsContainer>
    )
}
