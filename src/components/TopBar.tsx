"use client"

import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import "@/style/top.css"
import { useState } from "react";

const TopBar = () => {
    const [ drawerOpen , setDrawerOpen ] = useState<boolean>(false);

    return (
        <Box sx={{ display : "flex" , justifyContent : "space-between", alignItems : "center" , p : { xs : "10px 20px" , sm : "10px 100px" } , width : "100vw" , position : "fixed" , top : 0  , zIndex : 100  , backgroundColor: "rgba(64, 60, 60, 0.1)", backdropFilter :  "blur(10px)", }}>
            <Box component={"a"} href={"#about"} sx={{ textDecoration : "none" , display : "flex" , cursor : "pointer" , userSelect : "none" , transition : "all 0.2s ease" , ":hover" : { scale : 1.05}}}>
                <Typography sx={{ fontSize : "35px" , color : "text.primary" , fontWeight : 700}} >Port</Typography>
                <Typography sx={{ fontSize : "35px" , color : "secondary.main" , fontWeight : 700 , textShadow : "0 0 10px #2c89fcff"}} >folio</Typography>
            </Box>
            <Box sx={{ display : { xs : "none" , sm : "flex"} , gap : "40px"}}>
                {topItems.map(item => (
                    <Box key={item.id}>
                        <Typography component={"a"} href={`#${item.href}`} sx={{ textDecoration : "none" , display : "inline-block" , color : "text.primary" , userSelect : "none" , fontWeight : 400 , position : 'relative' , cursor : "pointer" , fontSize : "16px" , transition : "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)" , ":hover" : { color : "secondary.main" , scale : 1.1}}} className="topItem" >{item.name}</Typography>
                    </Box>
                ))}
            </Box>
            <IconButton sx={{ display : { xs : "block" , sm : "none"} }} onClick={() => setDrawerOpen(true)}>
                <MenuRoundedIcon sx={{ color : "secondary.main" , fontSize : "26px" }} />
            </IconButton>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)} 
                slotProps={{
                    paper : {
                        sx : {
                            backgroundColor: "rgba(64, 60, 60, 0.1)", backdropFilter :  "blur(10px)",
                        }
                    }
                }} 
            >
                <List>
                    {topItems.map(item => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton href={ "#" + item.href }>
                                <ListItemText primary={item.name} sx={{ textAlign : "center"}} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}

export default TopBar;

interface TopItemType {
    id : number,
    name : string,
    href : string
}

const topItems : TopItemType[] = [
    {
        id : 1 , 
        name : "About",
        href : "about"
    },
    {
        id : 2 , 
        name : "Projects",
        href : "project"
    },
    {
        id : 3 , 
        name : "Skills",
        href : "skill"
    },
    {
        id : 4 , 
        name : "Contact",
        href : "contact"
    }

]