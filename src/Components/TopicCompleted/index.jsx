import axios from "axios";
import { useState , useEffect, useContext} from "react";
import { FaCircle } from "react-icons/fa";
import { ThemeProvider } from "../../Provider/ContextProvider";
export function TopicCompleted({topicId, roadmapId, initialValue}) {
 
  const {color} = useContext(ThemeProvider)

  const [completed, setCompleted] = useState(initialValue);

   useEffect(() => {
    setCompleted(initialValue);  
  }, [initialValue])

  const handleComplete = async () => {
    const newValue = !completed;
    const token = localStorage.getItem("token");
   console.log("PROPS:", { roadmapId, topicId });
     if (!roadmapId || !topicId) {
    console.error("roadmapId ou topicId ausentes!",{roadmapId, topicId});
    return;
  }

  try {
    const res = await axios.patch(
      `http://localhost:3000/userProgress`,
      { roadmap: roadmapId, topic: topicId, isCompleted: newValue },
      { headers: { Authorization: `Bearer ${token}` } }
    );

   
    setCompleted(res.data.isCompleted);
    console.log("Tópico atualizado:", res.data);
  } catch (error) {
    console.error("Erro ao atualizar tópico:", error);
  }
  };

 
 
  return (
    <button className="bg-transparent" onClick={ handleComplete}>
      <FaCircle
        className={`${completed && color?
           "text-green-500" : completed && !color ? 
           "text-green-800" : !completed && color ? 
           "text-red-500" :
           "text-red-800"}`}
      />
    </button>
  );
}

{
  /*um componente (TopicCompleted) carrega com ele não só o que vai ser renderizado, mas também a função */
}
