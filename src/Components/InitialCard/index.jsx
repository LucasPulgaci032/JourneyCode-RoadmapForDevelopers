import { LangsContainer } from "../../RoadmapComponents/Container";
import { LangDescription, TopicsTitle } from "../../RoadmapComponents/exports";
import { LangTitle } from "../../RoadmapComponents/LangTitle";
import { dataTypes, dataTypesCode, inicialDescription, logicAndAlgoritms, operators, operatorsCode, varAndConstCode, varAndConsts } from "./text";
import ReactMarkdown from 'react-markdown'
import {  stylesForDivCode1, stylesForDivCode2 } from "../../Styles/styles";
import { useContext } from "react";
import { ThemeProvider } from "../../Provider/ContextProvider";

const initialContent = [
  {
    Variáveis: [varAndConsts,varAndConstCode]
  },
  {
   Tipagem: [dataTypes,dataTypesCode]
  },
  {
   Operadores: [operators,operatorsCode]
  }
]



export function InitialCardPage(){
  const {color} = useContext(ThemeProvider)
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
          {initialContent.map((item,idx)=>(
            <div key={idx} className="flex flex-col gap-8 max-w-[90%]
            min-w-[90%] ">
                <TopicsTitle>
                    {Object.keys(item)}
                </TopicsTitle>
                {Array.isArray(Object.values(item)[0][0]) ?
                Object.values(item)[0][0]
                .map((item,idx)=>(
                 
                  <ReactMarkdown key={idx}>
                    {item}
                  </ReactMarkdown>
                )) :
                  <LangDescription>
                    {Object.values(item)[0][0]}
                  </LangDescription>
                }
              
              <section className={color ? stylesForDivCode1 : stylesForDivCode2}>
              <ReactMarkdown>{Object.values(item)[0][1]}</ReactMarkdown> 
              </section>    
            </div>
          ))}
        </LangsContainer>
    )
}

