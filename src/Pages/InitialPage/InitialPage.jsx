import { Banner } from "../../Components/Banner";
import Title from "../../Components/Title";
import Description from "../../Components/Description";
import {HowToUse, LinesHTU} from "../../Components/HowUse";
import { RoadmapCards } from "../../Components/RoadmapCards";
import { InitialCard } from "../../Components/InitialCard/card";

InitialCard

//import { useState } from "react";
export default function StartComponents() {

   /*const[menu,setMenu] = useState(false)

   function toggleMenu(){
     setMenu(!menu)
   }*/



    return(
        <div className={`flex flex-col mb-10 gap-10 text-center `} >
            <header className="flex flex-col 
            h-1/2
            gap-4 
            bg-gradient-to-r from-blue-200 to-blue-900
            m-10
            rounded-md
            animate-glow
            min-w-[80%]
            p-4
            ">   
            <Title className="text-[--font-color-title] font-[Orbitron] font-bold tracking-widest self-center text-[40px] max-w-[80%]">JourneyCode</Title>
             <Banner/>{/*src = {bannerImg}/*/}
        </header>
            <Description justifyStart>Aprenda, progrida e conquiste: roadmaps claros para cada linguagem essencial.</Description>
           
            <HowToUse>
                <LinesHTU>Escolha sua linguagem</LinesHTU>
                <LinesHTU>Siga o roadmap</LinesHTU>
                <LinesHTU>Perceba sua evolução.</LinesHTU>
            </HowToUse>
                <InitialCard/>
            <Description>Escolha a linguagem e siga seu roadmap de estudos passo a passo.</Description>
           <RoadmapCards/>
          
        </div>
    )
}