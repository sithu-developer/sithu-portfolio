"use client"

import { Box, Button, Slide } from "@mui/material"

const TopBar2 = () => {
    return (
        <Slide in direction="down" timeout={{ enter : 2000}} >
            <Box sx={{ display : "flex" , gap : "5px" , alignItems : "center" , position : "fixed" , top : "10px" , p : "10px" , zIndex : 1 , backgroundColor: "rgba(64, 60, 60, 0.1)", backdropFilter :  "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)" , boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" , borderRadius : "10px" }}>
                {topItems.map(item => (
                    <Button key={item.id} onClick={() => console.log("hello")} 
                        sx={{ fontWeight : "600" , fontSize : "18px" , color : "primary.dark"  , transition : "all 0.1s linear" , ":hover" : { transform : "translateY(-5px)"}}}
                    >{item.name}</Button>
                ))}
            </Box>
        </Slide>
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