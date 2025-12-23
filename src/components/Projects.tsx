"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import "@/style/project.css";
import ProjectDetail, { BodyDetailType, digitalVotingDetails, digitalVotingHeadingDetails, happyChattingDetails, happyChattingHeadingDetails, HeadingDetail, malaMaocaiHeadingDetails } from "./ProjectDetail";

export interface ProjectDetailItems { 
  open : boolean, 
  selectedProject : ProjectType | null;
}

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [ projectDetailItems , setProjectDetailItems ] = useState<ProjectDetailItems>({ selectedProject : null , open : false});

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
    <Box id="project" sx={{ width: "100vw", minHeight : "100vh", display : "flex" , flexDirection : "column" , justifyContent : "start" , alignItems : "center" , gap : { xs : "30px" , sm : "70px" } , pt : "95px" }}>
      <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "white" , fontWeight : 600  }}>My <Box component={"span"} sx={{  background : "linear-gradient(to right , #2196f3, #21cbf3 , #dde1e4ff )" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent" }} >Projects</Box></Typography>
      <Box
        ref={boxRef}
        sx={{  display : "flex" , flexDirection : { xs : "column" , sm : "row"} , justifyContent : "center" , alignItems : "center", width : "100%" , gap : "30px" }}
      >
        {projects.map(item => ( 
          <Grow key={item.id} in={visible} {...(visible ? { timeout: item.id * 1000 } : {})} >
            <Box className="project-box" onClick={() => setProjectDetailItems({ selectedProject : item , open : true})} >
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
  headingUrl : string;
  headingTypo : string;
  headingDetail : HeadingDetail[]
  liveDemo : string;
  codeSource : string;
  bodyDetail : BodyDetailType[];
}

const projects : ProjectType[] = [
  {
    id : 0 ,
    name : "Mala Maocai",
    url : "/moon-maocai.png",
    headingUrl : "/moon-maocai.png",
    headingTypo : "Bridging the gap between hungry customers and efficient kitchen management.",
    headingDetail : malaMaocaiHeadingDetails,
    codeSource : "https://github.com/sithu-developer/maocai.git",
    liveDemo : "https://moon-maocai.vercel.app",
    bodyDetail : []
  },
  {
    id : 1 ,
    name : "Happy Chatting",
    url : "/happy-chatting.png",
    headingUrl : "/hc-phone.png",
    headingTypo : "A straightforward messaging platform that strips away the noise, focusing purely on what matters: the conversation.",
    headingDetail : digitalVotingHeadingDetails,
    codeSource : "https://github.com/sithu-developer/chatting.git",
    liveDemo : "https://chatting-rust.vercel.app",
    bodyDetail : happyChattingDetails
  },
  {
    id : 2 ,
    name : "Digital Voting",
    url : "/digital-voting.png",
    headingUrl : "/digital-voting-sign-in.png",
    headingTypo : "Developed a secure and user-friendly digital voting application for university events, such as a \"Fresher Welcome\" celebration.",
    headingDetail : happyChattingHeadingDetails,
    codeSource : "https://github.com/sithu-developer/Digital-Voting.git",
    liveDemo : "https://digital-voting.vercel.app",
    bodyDetail : digitalVotingDetails
  }
]
