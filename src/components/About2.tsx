"use client"

import { Box, Slide, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import "@/style/about.css";


const About2 = () => {

    return (
        <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px" , width : "100vw" , height : "100vh" }}>
          <Slide in direction="right" timeout={{ enter : 2000}} >
            <Box sx={{ width : "495px" , mb : "50px"}} >
                <Typography variant="h2" sx={{ textAlign : "center"}} >Hello! I'm Si Thu Naing</Typography>
                <Typography variant="h2" sx={{ textAlign : "center"}} >Full Stack Developer</Typography>
                <Typography variant="h5" sx={{ textAlign : "center"}} >I love turning complex problems into elegant solutions. As a Next.js full-stack developer, I enjoy the entire development lifecycle - from architecting data models to deploying serverless functions and creating intuitive front-end interfaces.  I'm always looking for new challenges that allow me to grow my skills and contribute to meaningful projects.</Typography>
            </Box>
          </Slide>
          <Box className="profile-container" >
            <Box  className="profile-wrapper" >
                <Image className="profile-img" alt="Sithu Naing's photo" src={"/sithu-photo3.png"} width={1000} height={1000} style={{ width : "450px" , height : "auto"}}  />
                <Box className="glow-effect"></Box>
            </Box>
          </Box>
        </Box>
    )
}

export default About2;