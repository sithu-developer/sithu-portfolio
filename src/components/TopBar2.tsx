"use client"

import { Box, Typography } from "@mui/material";

import "@/style/top.css"

const TopBar2 = () => {
    return (
        <Box sx={{ display : "flex" , justifyContent : "space-between", alignItems : "center" , p : "10px 100px" , width : "100vw" , position : "fixed" , top : 0 , bgcolor : "#112e54ff" }}>
            <Box sx={{ display : "flex" , gap : "5px" , cursor : "pointer" , userSelect : "none" , transition : "all 0.2s ease" , ":hover" : { scale : 1.05}}}>
                <Typography sx={{ fontSize : "35px" , color : "white" , fontWeight : 700}} >Sithu</Typography>
                <Typography sx={{ fontSize : "35px" , color : "secondary.main" , fontWeight : 700 , textShadow : "0 0 10px #2c89fcff"}} >Naing</Typography>
            </Box>
            <Box sx={{ display : "flex" , gap : "40px"}}>
                {topItems.map(item => (
                    <Box key={item.id} onClick={() => console.log("hello")}>
                        <Typography sx={{ color : "white" , userSelect : "none" , fontWeight : 400 , position : 'relative' , cursor : "pointer" , fontSize : "16px" , transition : "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)" , ":hover" : { color : "secondary.main" , scale : 1.1}}} className="topItem" >{item.name}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default TopBar2;

const topItems = [
    {
        id : 1 , 
        name : "About"
    },
    {
        id : 2 , 
        name : "Projects"
    },
    {
        id : 3 , 
        name : "Skills"
    },
    {
        id : 4 , 
        name : "Contact"
    }

]