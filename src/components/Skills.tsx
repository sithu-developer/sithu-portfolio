"use client"
import { Box, Chip, LinearProgress, Typography } from "@mui/material"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
    const [ value , setValue ] = useState<number>(0);
    const [ selectedCategoryId , setSelectedCategoryId ] = useState<number>(1);
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
        <Box id="skill" sx={{ width : "100vw" , height : "100vh" , display : "flex" , flexDirection : "column" , justifyContent : "start" , alignItems : "center"  , pt : "95px" , gap : "10px" }}>
            <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "white" , fontWeight : 600  }}>My <Box component={"span"} sx={{  background : "linear-gradient(to right , #2196f3, #21cbf3 , #dde1e4ff )" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent" }} >Skills</Box></Typography>
            <Box sx={{ display : "flex" , gap : "10px"}}>{categorieItems.map(item => (
                <Chip key={item.id} clickable onClick={() => setSelectedCategoryId(item.id)} label={item.name} sx={{ bgcolor : (item.id === selectedCategoryId ? "secondary.main" : "") , ":hover" : { bgcolor : "secondary.dark"}}} />
            ))}</Box>
            <Box ref={skillBoxRef} sx={{ width : { xs : "380px" , sm : "96%"} , maxHeight : "calc(100vh - 200px )" , overflowY : "auto" , overflowX : "auto" , display : "grid" , gridTemplateColumns : {  xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" , md : "repeat(3, 1fr)", lg: "repeat(4, 1fr)" } , gap : "15px" , p : "10px"}}>
                {skillItems.filter(skill => (skill.categoryId === selectedCategoryId) || (selectedCategoryId === 1)).map(item => (
                    <Box sx={{ width : "350px" , p : "5px 10px" , borderRadius : "5px" , backgroundColor: "rgba(133, 129, 129, 0.1)", backdropFilter :  "blur(10px)",}} key={item.id} >
                        <Box sx={{height : "35px" , width : "fit-content" , display : "flex" , justifyContent : "center" , alignItems : 'center' , gap : "10px"}}>
                            <Image alt={item.name} src={item.iconUrl} width={400} height={400} style={{ width : (item.width + "px") , height : "auto" }} />
                            <Typography sx={{ color : "text.primary"}}>{item.name}</Typography>
                        </Box>
                        <Box sx={{ width : "100%" , display : "flex" , alignItems : "center" , gap : "5px"}}>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={value - item.percentageToLearn}
                                    sx={{
                                    height: 8,
                                    borderRadius: 5,
                                    "& .MuiLinearProgress-bar": {
                                        background : "linear-gradient(to right, #dde1e4ff , #2196f3, #21cbf3)"
                                    },
                                    backgroundColor: "#2d2d2dff",
                                    }}
                                />
                            </Box>
                            <Typography sx={{ color : "text.primary" , mb : "2px" }}>{value - item.percentageToLearn}%</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Skills;

interface CategoryItemType {
    id : number
    name : string
}

const categorieItems : CategoryItemType[] = [
    {
        id : 1,
        name : "All"
    },
    {
        id : 2,
        name : "Frontend"
    },
    {
        id : 3,
        name : "Backend"
    },
    {
        id : 4,
        name : "Tools"
    },
]

interface SkillItemType {
    id : number
    name : string
    iconUrl : string
    width : number
    percentageToLearn : number
    categoryId : number
}


const skillItems : SkillItemType[] = [
    {
        id : 0,
        iconUrl : "/nextjs-letter.svg",
        name : "Next.js",
        percentageToLearn : 5,
        width : 80,
        categoryId : 2
    },
    {
        id : 1,
        iconUrl : "/html-css-icon.png",
        name : "HTML CSS",
        percentageToLearn : 5,
        width : 60,
        categoryId : 2
    },
    {
        id : 2,
        iconUrl : "/typescript-icon.svg",
        name : "TypeScript",
        percentageToLearn : 5,
        width : 30,
        categoryId : 2

    },
    {
        id : 3,
        iconUrl : "/mui-icon.svg",
        name : "Material UI (MUI)",
        percentageToLearn : 5,
        width : 30,
        categoryId : 2
    },
    {
        id : 4,
        iconUrl : "/nextauthjs-icon.svg",
        name : "NextAuth.js",
        percentageToLearn : 20,
        width : 30,
        categoryId : 3
    },
    {
        id : 5,
        iconUrl : "/prisma-icon.svg",
        name : "Prisma ORM",
        percentageToLearn : 10,
        width : 30,
        categoryId : 3
    },
    {
        id : 6,
        iconUrl : "/redux-icon.svg",
        name : "Redux Toolkit",
        percentageToLearn : 5,
        width : 30,
        categoryId : 2
    },
    {
        id : 7,
        iconUrl : "/postgresql-icon.svg",
        name : "PostgreSQL",
        percentageToLearn : 9,
        width : 30,
        categoryId : 3
    },
    {
        id : 8,
        iconUrl : "/aiven-icon.svg",
        name : "Aiven for PostgreSQL",
        percentageToLearn : 15,
        width : 30,
        categoryId : 3
    },
    {
        id : 9,
        iconUrl : "/render-icon.svg",
        name : "Render for PostgreSQL",
        percentageToLearn : 15,
        width : 30,
        categoryId : 3
    },
    {
        id : 10,
        iconUrl : "/vscode-icon.svg",
        name : "Visual Studio Code",
        percentageToLearn : 5,
        width : 30,
        categoryId : 4
    },
    {
        id : 11,
        iconUrl : "/tableplue-icon.png",
        name : "Table Plus",
        percentageToLearn : 5,
        width : 30,
        categoryId : 4
    },
    {
        id : 12,
        iconUrl : "/github-icon.svg",
        name : "Git Hub",
        percentageToLearn : 5,
        width : 30,
        categoryId : 4
    },
    {
        id : 13,
        iconUrl : "/figma-icon.svg",
        name : "Figma",
        percentageToLearn : 19,
        width : 20,
        categoryId : 4
    },
]