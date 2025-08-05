"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

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
        sx={{  display : "flex" , justifyContent : "center" , alignItems : "center", width : "100%" , gap : "20px" }}
      >
        {projects.map(item => ( 
          <Box key={item.id} sx={{ display : "flex" , justifyContent : 'center' , alignItems : "center" , width : "380px" , height : "250px" , overflow : "hidden" , borderRadius : "5px" , cursor : "pointer" , transition : "all 100ms" , ":hover" : { scale : 1.05 , border : "2px solid #2c89fcff" } }}>
            <Image alt={item.name} src={item.url} width={1000} height={1000} style={{  width : "auto" , height : "100%" }} />
          </Box>
        ))}
      </Box>
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
  },{
    id : 3 ,
    name : "Happy Chatting",
    url : "/happy-chatting.png"
  },
]
