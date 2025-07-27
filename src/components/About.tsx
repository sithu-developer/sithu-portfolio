"use client"

import { Box, Slide, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";


const About = () => {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px" , width : "100vw" , height : "100vh" }}>
          <Slide in direction="right" timeout={{ enter : 2000}} >
            <Box sx={{ width : "500px"}} >
                <Typography variant="h2" sx={{ textAlign : "center"}} >Hello! I'm</Typography>
                <Typography variant="h2" sx={{ textAlign : "center"}} >Si Thu Naing,</Typography>
                <Typography variant="h5" sx={{ textAlign : "center"}} >and I love turning complex problems into elegant solutions. As a Next.js full-stack developer, I enjoy the entire development lifecycle - from architecting data models to deploying serverless functions and creating intuitive front-end interfaces.  I'm always looking for new challenges that allow me to grow my skills and contribute to meaningful projects.</Typography>
            </Box>
          </Slide>
          <Box ref={containerRef} sx={{ width : "450px" , height : "500px" , borderRadius : "50px" , overflow : "hidden" , display : "flex" , justifyContent : "center" , alignItems : "start" , backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter :  "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)" , boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" , transition : "all 0.5s ease-in-out" , ":hover" : { transform : "rotate(360deg)" , scale : 0.5 } }}>
            <Slide in direction="up" container={containerRef.current} timeout={{ enter : 2000 , exit : 1000 , appear : 100}} >
                <Image alt="Sithu Naing's photo" src={"/sithu-photo.png"} width={1000} height={1000} style={{ width : "550px" , height : "auto"}}  />
            </Slide>
          </Box>
        </Box>
    )
}

export default About;