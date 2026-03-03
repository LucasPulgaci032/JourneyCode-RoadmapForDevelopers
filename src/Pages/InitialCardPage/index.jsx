import { LangsContainer } from "../../RoadmapComponents/Container/index.jsx";
import {
  LangDescription,
  TopicsTitle,
} from "../../RoadmapComponents/exports.js";
import { LangTitle } from "../../RoadmapComponents/LangTitle/index.jsx";
import {
  arrayCode,
  arrayDescription,
  arrayThirdContent,
  dataTypes,
  dataTypesCode,
  inicialDescription,
  logicAndAlgoritms,
  loopings,
  loopingsCode,
  operators,
  operatorsCode,
  varAndConstCode,
  varAndConsts,
  conditionalDescription,
  conditionalCode,
  functionDescription,
  functionCode,
} from "./text.ts";
import ReactMarkdown from "react-markdown";
import { ToggleSectionCode } from "../../Components/ToggleSectionCode/ToggleSectionCode.jsx";
import { SectionCode } from "../../RoadmapComponents/SectionCode/SectionCode.jsx";

const initialContent = [
  {
    Variáveis: [varAndConsts, varAndConstCode],
  },
  {
    Tipagem: [dataTypes, dataTypesCode],
  },
  {
    Operadores: [operators, operatorsCode],
  },
  {
    Listas: [arrayDescription, arrayCode, arrayThirdContent],
  },
  {
    "Laços de repetição": [loopings, loopingsCode],
  },
  {
    "Estruturas de decisão": [conditionalDescription, conditionalCode],
  },
  {
    Funções: [functionDescription, functionCode],
  },
];

export function InitialCardPage() {
  return (
    <LangsContainer>
      <LangTitle>Lógica de programação : conceitos iniciais</LangTitle>
      <LangDescription>{inicialDescription}</LangDescription>
      <TopicsTitle>Algoritmos e Lógica</TopicsTitle>
      <p>{logicAndAlgoritms}</p>
      {initialContent.map((item, idx) => {
        const name = Object.keys(item);
        const description = Object.values(item)[0][0];
        const code = Object.values(item)[0][1];
        return (
          <div key={idx} className="flex flex-col gap-4 w-full p-4">
            <section className="flex flex-row justify-between">
              <LangTitle>{name}</LangTitle>
            </section>
            {Array.isArray(description) ? (
              description.map((item, subIdx) => (
                <ReactMarkdown key={subIdx}>{item}</ReactMarkdown>
              ))
            ) : (
              <ReactMarkdown>{description}</ReactMarkdown>
            )}
            <SectionCode>
              <LangDescription>{Object.keys(item)}</LangDescription>
              <ToggleSectionCode code={code} />
            </SectionCode>
          </div>
        );
      })}
    </LangsContainer>
  );
}
