import { Banner } from "./Banner";
import Title from "./Title";
import bannerImg from "../Images/exports";
import Description from "./Description";
import {HowToUse, LinesHTU} from "./HowUse";
import { RoadmapCards } from "./RoadmapCards";
//import { useState } from "react";
export default function StartComponents() {

   /*const[menu,setMenu] = useState(false)

   function toggleMenu(){
     setMenu(!menu)
   }*/

    return(
        <div className=" flex flex-col gap-20 text-center" >
            <header className="flex flex-col 
            h-1/2
            items-center 
            gap-4 
            bg-gradient-to-r from-blue-500 to-purple-600 
            p-2 
            rounded-md
            animate-glow
            ">   
            <Title className="text-[--font-color-title] font-[Orbitron] font-bold tracking-widest text-[40px] max-w-[80%]">JourneyCode</Title>
             <Banner src = {bannerImg}/>
        </header>
            <Description justifyStart>Aprenda, progrida e conquiste: roadmaps claros para cada linguagem essencial.</Description>
           
            <HowToUse>
                <LinesHTU>Escolha sua linguagem</LinesHTU>
                <LinesHTU>Siga o roadmap</LinesHTU>
                <LinesHTU>Perceba sua evolução.</LinesHTU>
            </HowToUse>
            <Description>Escolha a linguagem e siga seu roadmap de estudos passo a passo.</Description>
           <RoadmapCards/>
        </div>
    )
}