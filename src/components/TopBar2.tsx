"use client"

import { Box, Button, List, ListItem, Slide, Typography } from "@mui/material"

const TopBar2 = () => {
    return (
        <Box>
            {topItems.map(item => (
                    <Box key={item.id} onClick={() => console.log("hello")}>
                        <Typography sx={{ color : "white"}} >{item.name}</Typography>
                    </Box>
                ))}
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