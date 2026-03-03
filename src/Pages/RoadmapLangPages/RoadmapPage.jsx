
import { useParams } from "react-router-dom";
import {
  LangsContainer,
  LangTitle,
  LangDescription,
  LangTopics,
  TopicsTitle,
} from "../../RoadmapComponents/exports.js";
import ReactMarkdown from "react-markdown";
import { roadmapContent } from "./roadmapContent.ts";
import { classJava } from "./StaticCodeContent/JavaCodeContent.ts";
import { SectionCode } from "../../RoadmapComponents/SectionCode/SectionCode.jsx";
import { ToggleSectionCode } from "../../Components/ToggleSectionCode/ToggleSectionCode.jsx";
import { TopicCompleted } from "../../Components/TopicCompleted/index.jsx";
import { useRoadmapData } from "../../hooks/useRoadmapData.js";


export function RoadmapGeneric() {
  const { name } = useParams();

  const {renderData, 
        renderTopic,   
        progress,
        loading,
        error} = useRoadmapData(name)
  
  if (loading)
    return <p className="text-4xl text-center mt-[10%]">carregando...</p>;
  if (error) return <p className="text-4xl text-center mt-[10%]">erro</p>;

  const javaClass = name == "Java" ? classJava : null;

  const topicName = [
    "Variáveis",
    "Tipos de dados",
    "Operadores",
    name === "Python" ? "Objetos, Arrays e Dicionários" : "Objetos e Arrays",
    "Loopings",
    "Estruturas de decisão",
    name === "Java" ? "Classes e métodos" : "Funções",
  ];



  const codes = roadmapContent.find(param => param.language === name)
  const codesContent = Object.keys(codes).filter(key => key !== 'language').map(key => codes[key].code)


 
  if (!renderData) return <p>Item não encontrado</p>;

  return (
    <LangsContainer>
      <LangTitle>{renderData.name}</LangTitle>
      <LangDescription>{renderData.description}</LangDescription>
      {javaClass ? (
        <SectionCode>
          <ReactMarkdown>{javaClass}</ReactMarkdown>
        </SectionCode>
      ) : null}

     {
     renderTopic.map((topicItem,idx) => {
      
  
      if (!topicItem) return null;
       const topicProgress = progress.find(p => p.topic === topicItem._id)?.isCompleted || false;
      return(
        
         <div
          className="flex flex-col gap-8 w-full"
          key={topicItem._id}
        >
          <TopicsTitle>{topicName[idx]}</TopicsTitle>
         
          <TopicCompleted   //botão que recebe via props id de topico, id de roadmap e valor do progresso (concluído ou não)
          topicId={topicItem._id}    
           roadmapId={topicItem.roadmap._id}
          initialValue={topicProgress}
          />
          
             <LangTopics>{topicItem.content}</LangTopics>
             <SectionCode>
                {topicName[idx]}
                <ToggleSectionCode code={codesContent[idx]}/>
             </SectionCode>
        </div>
      )
     })
  }
    </LangsContainer>
  );
}

