"use client"
import { Box, LinearProgress, Typography } from "@mui/material"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
    const [ value , setValue ] = useState<number>(0);
    const skillBoxRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const boxCurrent = skillBoxRef.current;
        if(!boxCurrent) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setValue(100)
                    
                    observer.disconnect();
                }
            } , 
            { threshold : 0.1 }
        )

        observer.observe(boxCurrent);
        return () =>  observer.disconnect();
    } , [])

    return (
        <Box sx={{ width : "100vw" , height : "100vh" , display : "flex" , flexDirection : "column" , justifyContent : "start" , alignItems : "center" , pt : "95px"  }}>
            <Typography variant="h3" sx={{ color : "white"}}>Skills</Typography>
            
            <Box ref={skillBoxRef} sx={{ width : "100%" , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" , gap : "20px"}}>
                <Box sx={{ width : "40%"}}>
                    {/* <Box sx={{height : "40px" , width : "fit-content" , display : "flex" , justifyContent : "center" , alignItems : 'center' , gap : "10px"}}>
                        <Image alt="nextjs" src={"/nextjs.svg"} width={400} height={400} style={{ width : "40px" , height : "auto" }} />
                        <Typography sx={{ color : "text.primary"}}>Next.js</Typography>
                    </Box> */}
                    <Box sx={{height : "35px" , width : "fit-content" , display : "flex" , justifyContent : "center" , alignItems : 'center' , gap : "10px"}}>
                        <Image alt="nextjs" src={"/nextjs letter.svg"} width={400} height={400} style={{ width : "80px" , height : "auto" }} />
                    </Box>
                    <Box sx={{ width : "100%" , display : "flex" , alignItems : "center" , gap : "5px"}}>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress
                                variant="determinate"
                                value={value - 10}
                                sx={{
                                height: 8,
                                borderRadius: 5,
                                "& .MuiLinearProgress-bar": {
                                    backgroundColor: "#21cbf3",
                                },
                                backgroundColor: "#2d2d2dff",
                                }}
                            />
                        </Box>
                        <Typography sx={{ color : "text.primary" , mb : "2px" }}>90%</Typography>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Skills;