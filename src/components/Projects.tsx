"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import "@/style/project.css";
import ProjectDetail from "./ProjectDetail";

export interface ProjectDetailItems { 
  open : boolean, 
  id : number 
}

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [ projectDetailItems , setProjectDetailItems ] = useState<ProjectDetailItems>({id : 0 , open : false});

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ width: "100vw", height: "100vh", display : "flex" , flexDirection : "column" , justifyContent : "start" , alignItems : "center" , gap : "70px", pt : "95px" }}>
      <Typography variant="h4" sx={{ fontWeight : 600 , background : "linear-gradient(to right, #dde1e4ff , #2196f3, #21cbf3 , white)" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent"}}>My Projects</Typography>
      <Box
        ref={boxRef}
        sx={{  display : "flex" , justifyContent : "center" , alignItems : "center", width : "100%" , gap : "30px" }}
      >
        {projects.map(item => ( 
          <Grow key={item.id} in={visible} {...(visible ? { timeout: item.id * 1000 } : {})} >
            <Box className="project-box" onClick={() => setProjectDetailItems({ id : item.id , open : true})} >
              <Image  className="project-img"  alt={item.name} src={item.url} width={1000} height={1000} style={{  width : "100%" , height : "100%" , borderRadius : "5px" , transition : "all 0.4s" }} />
            </Box>
          </Grow>
        ))}
      </Box>
      <ProjectDetail projectDetailItems={projectDetailItems} setProjectDetailItems={setProjectDetailItems} />
    </Box>
  );
};

export default Projects;

interface ProjectType {
  id : number
  name : string
  url : string
}

const projects : ProjectType[] = [
  {
    id : 1 ,
    name : "Happy Chatting",
    url : "/happy-chatting.png"
  },
  {
    id : 2 ,
    name : "Happy Chatting",
    url : "/happy-chatting.png"
  }
]
