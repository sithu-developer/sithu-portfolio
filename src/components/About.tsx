"use client"

import { Box, Slide, Typography } from "@mui/material";
import Image from "next/image";
import "@/style/about.css";
import { useEffect, useState } from "react";


const About = () => {
  const [ jopClassName , setJopClassName ] = useState<string>();
  const [ jopIndex , setJopIndex ] = useState<number>(0);
  const jops : string[] = ["Full-Stack Developer" , "Web Designer" , "Next.js Developer"]

  useEffect(() => {
    if(!setJopIndex) return;
    console.log("hello")
    const interval = setInterval(() => {
      setJopIndex((prev) => (prev + 1) % jops.length)
      setJopClassName("jop")
    } , 4000);

    return () => {
      clearInterval(interval)
    }
  } , [ setJopIndex ])

    return (
        <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px" , width : "100vw" , height : "100vh" }}>
          <Slide in direction="right" timeout={{ enter : 2000}} >
            <Box sx={{ width : "500px" , mb : "50px" }} >
                <Typography  sx={{ textAlign : "start" , fontSize : "25px" , lineHeight : 0.5 , fontWeight : 700 , color : "text.primary"}} >Hello! I'm </Typography>
                <Typography variant="h3" sx={{ textAlign : "start" , fontWeight : 700, lineHeight : 1.4 , width : "fit-content" , background : "linear-gradient(to right, #dde1e4ff , #2196f3, #21cbf3 , white)" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent"}} >Si Thu Naing</Typography>
                <Typography sx={{ textAlign : "start" , fontSize : "28px" , height : "45px", fontWeight : 700 , mt : "5px" , display : "flex" , color : "text.primary" }} >And I'm a<Box className={jopClassName} component={"span"} sx={{ ml : "10px"}}> {jops[jopIndex]}</Box></Typography>
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

export default About;