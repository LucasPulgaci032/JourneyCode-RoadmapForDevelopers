import { useState, useEffect } from "react";
import axios from "axios";

export function useRoadmapData(name){
    
      const [renderData, setRenderData] = useState({});
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(true);
     const [renderTopic, setRenderTopic] = useState([])
     const [progress,setProgress] = useState([])
    
      useEffect(() => {
        async function fetchLang() {
          try {
            const resRoadmap = await fetch(
              `http://localhost:3000/roadmaps/lang?name=${name} `,
            );
            const roadmapData = await resRoadmap.json();
            setRenderData(roadmapData);
    
            const resTopic = await fetch(
              `http://localhost:3000/newTopics/roadmap?roadmapName=${name} `
            )
            const topicData = await resTopic.json()
            setRenderTopic(topicData)
    
            const token = localStorage.getItem('token')
            const resProgress = await axios.get(`http://localhost:3000/userProgress/roadmap/${roadmapData._id}`,
              { headers: { Authorization: `Bearer ${token}` } })
             setProgress(resProgress.data);
    
          } catch (err) {
            console.error(err);
            setError(true);
          } finally {
            setLoading(false);
          }
         }
      
        fetchLang();
      }, [name, location.pathname]);
       return {
        renderData, 
        renderTopic,   
        progress,
        loading,
        error
  };
}
