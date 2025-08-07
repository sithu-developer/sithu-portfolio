"use client"
import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Image from "next/image";
import { ProjectDetailItems } from "./Projects";

interface Props {
    projectDetailItems : ProjectDetailItems;
    setProjectDetailItems : (value : ProjectDetailItems) => void;
}

const ProjectDetail = ({ projectDetailItems , setProjectDetailItems } : Props) => {
    return (
        <Dialog open={projectDetailItems.open} fullScreen >
            <DialogContent sx={{ backgroundImage : "url('/lp.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"}}>
                <Box  sx={{ display : "flex" , justifyContent : "start", alignItems : "center" , gap : "20px" , p : "10px 30px" , width : "100vw" , position : "fixed" , top : 0 , left : 0 , zIndex : 100  , backgroundColor: "rgba(64, 60, 60, 0.1)", backdropFilter :  "blur(10px)", }}>
                    <IconButton color="secondary" onClick={() => setProjectDetailItems({id : 0 , open : false})} >
                        <CloseRoundedIcon sx={{ color : "white"}} />
                    </IconButton>
                    <Typography sx={{ fontSize : "35px", fontWeight : 600 , background : "linear-gradient(to right, #dde1e4ff , #2196f3, #21cbf3 , white)" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent" }} >{projectDetailItems.id === 1 ? "Happy Chatting" : "Digital Voting"}</Typography>
                </Box>
                <Box sx={{ width : "100%" , height : "80%" , display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px"}}>
                    <Box sx={{ width : "600px" , height : "400px"}}>
                        <Image  alt={"hc"} src={projectDetailItems.id === 1 ? "/happy-chatting3.png" : "/digital-voting-ph.png"} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                        <Typography variant="h5">Happy Chatting</Typography>
                        <Typography>- I developed a real-time messaging app,"Happy Chatting", using "Next.js"</Typography>
                        <Typography>- It offers a simple, clean interface inspired by Telegram</Typography>
                        <Typography variant="h6">Sign In</Typography>
                        <Typography>- Users can sign in easily and securely with their Google account</Typography>
                        <Typography>- I integrated "NextAuth" to provide secure and effortless sign-in with Google accounts</Typography>
                    </Box>
                </Box>
                <Box sx={{ width : "100%" , height : "80%" , display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px"}}>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                        <Typography variant="h5">Main Page</Typography>
                        <Typography>- In main page , user can see his chats with his friends and saved-messages</Typography>
                        <Typography>- There are also menu icon and search icon in top-bar</Typography>
                    </Box>
                    <Box sx={{ width : "600px" , height : "400px"}}>
                        <Image  alt={"hc"} src={projectDetailItems.id === 1 ? "/hc-main.png" : "/digital-voting-ph.png"} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                </Box>
                <Box sx={{ width : "100%" , height : "80%" , display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px"}}>
                    <Box sx={{ width : "600px" , height : "400px"}}>
                        <Image  alt={"hc"} src={projectDetailItems.id === 1 ? "/hc-sidebar.png" : "/digital-voting-ph.png"} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                        <Typography variant="h5">In Side Bar</Typography>
                        <Typography>- It offers simple UI to edit Profile , explore new friends and open Saved Messages</Typography>
                        <Typography>- Users can sign out in Settings</Typography>
                    </Box>
                </Box>
                <Box sx={{ width : "100%" , height : "80%" , display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px"}}>
                    
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                        <Typography variant="h5">Search</Typography>
                        <Typography>- It offers easily , simple and efficient interface for searching</Typography>
                        <Typography>- User can search both friends and messages at the same time</Typography>
                    </Box>
                    <Box sx={{ width : "600px" , height : "400px"}}>
                        <Image  alt={"hc"} src={projectDetailItems.id === 1 ? "/hc-search.png" : "/digital-voting-ph.png"} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                </Box>
                <Box sx={{ width : "100%" , height : "80%" , display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "60px"}}>
                    <Box sx={{ width : "600px" , height : "400px"}}>
                        <Image  alt={"hc"} src={projectDetailItems.id === 1 ? "/hc-message.png" : "/digital-voting-ph.png"} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                        <Typography variant="h5">In chat</Typography>
                        <Typography>- Users can send messages , photos , emoji and voice </Typography>
                        <Typography>- Users can reply , copy , forward , edit and delete the messages</Typography>
                        <Typography>- And can also pin the messages to the top of the chat</Typography>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetail;