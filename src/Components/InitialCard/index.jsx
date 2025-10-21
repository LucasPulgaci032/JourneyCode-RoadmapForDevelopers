import { LangsContainer } from "../../RoadmapComponents/Container";
import { LangDescription } from "../../RoadmapComponents/exports";
import { LangTitle } from "../../RoadmapComponents/LangTitle";
import { inicialDescription, logicAndAlgoritms } from "./text";

export function InitialCardPage(){
    return(
        <LangsContainer>
            <LangTitle>Lógica de programação : conceitos iniciais</LangTitle>
            <LangDescription>
                {inicialDescription}
            </LangDescription>
          <h2>Algoritmos e Logica</h2>
          <p>
            {logicAndAlgoritms}
          </p>
        </LangsContainer>
    )
}