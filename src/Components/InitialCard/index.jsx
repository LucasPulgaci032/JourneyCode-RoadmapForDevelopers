
import { LangsContainer } from "../../RoadmapComponents/Container";
import { LangDescription, TopicsTitle } from "../../RoadmapComponents/exports";
import { LangTitle } from "../../RoadmapComponents/LangTitle";
import { arrayCode, arrayDescription, arrayThirdContent, dataTypes, dataTypesCode, inicialDescription, logicAndAlgoritms, loopings, loopingsCode, operators, operatorsCode, varAndConstCode, varAndConsts, conditionalDescription, conditionalCode } from "./text.ts";
import ReactMarkdown from 'react-markdown'
import { ToggleSectionCode } from "../ToggleSectionCode/ToggleSectionCode.jsx"
import { SectionCode } from "../../RoadmapComponents/SectionCode/SectionCode.jsx";

const initialContent = [
  {
    "Variáveis": [varAndConsts,varAndConstCode]
  },
  {
   "Tipagem": [dataTypes,dataTypesCode]
  },
  {
   "Operadores": [operators,operatorsCode]
  },
  {
    "Listas" : [arrayDescription,arrayCode,arrayThirdContent]
  },
  {
    "Laços de repetição" : [loopings,loopingsCode]
  },
  {
    "Estruturas de decisão" : [conditionalDescription, conditionalCode]
  }
]




export function InitialCardPage(){
  

 
 

    return(
        <LangsContainer>
            <LangTitle>Lógica de programação : conceitos iniciais</LangTitle>
            <LangDescription>
                {inicialDescription}
            </LangDescription>
          <TopicsTitle>
            Algoritmos e Lógica
          </TopicsTitle>
          <p>
            {logicAndAlgoritms}
          </p>
          {initialContent.map((item,idx)=> {
            const name = Object.keys(item)
            const description = Object.values(item)[0][0]
            const code = Object.values(item)[0][1]
            return(
         <div key={idx} className="flex flex-col gap-4">
          <LangTitle>
                  {name}
          </LangTitle>
          {Array.isArray(description) ? description.map((item,subIdx) => (
            <ReactMarkdown key={subIdx}>{item}</ReactMarkdown>
          )) : (
            <ReactMarkdown >
              {description}
            </ReactMarkdown>
          )}
              <SectionCode key={idx}>
                <LangDescription>{Object.keys(item)}</LangDescription>
                <ToggleSectionCode 
                code={code}/>
              </SectionCode>
         </div>
         )})}
        </LangsContainer>
    )
}

{/* {initialContent.map((item,idx)=> (
            <div key={idx} className="flex flex-col gap-8 max-w-[90%]
            min-w-[90%]">
                <TopicsTitle>
                    {Object.keys(variaveis)}
                </TopicsTitle>

                {Array.isArray(Object.values(variaveis)[0][0]) ?
                Object.values(variaveis)[0][0]
                .map((item,sub)=>(
                 
                  <ReactMarkdown key={sub}>
                    {item}
                  </ReactMarkdown>
                )) :
                  <LangDescription>
                    {Object.values(variaveis)[0][1]}
                  </LangDescription>
                }
              
              <SectionCode>
                <ReactMarkdown> 
                    {`__${Object.keys(tipagem)}__`}
                 </ReactMarkdown>
                  <ToggleSectionCode code={Object.values(tipagem)[0][1]}/>
                 </SectionCode>  
              {Object.values(tipagem) && (
                <ReactMarkdown>
                    {Object.values(tipagem)[0][1]}
                 </ReactMarkdown>
              )}
            </div>
            )
          )} */}