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
                    <Box sx={{ width : "160px" , height : "300px"}}>
                        <Image  alt={"hc"} src={"/hc-phone.png"} width={1000} height={1000} style={{  width : "auto" , height : "100%" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                        <Typography variant="h5">Happy Chatting</Typography>
                        <Typography>- I developed a real-time messaging app,"Happy Chatting",</Typography>
                        <Typography>- It offers a simple, clean and responsive interface, inspired by Telegram</Typography>
                        <Typography>- I used Next.js , TypeScript , Material UI (MUI) , NextAuth.js , Prisma ORM , Redux Toolkit , PostgreSQL , Vercel and Aiven for PostgreSQL</Typography>
                    </Box>
                </Box>
                {projectDetailItems.id === 1 ? (happyChattingDetails.map(item => (
                    <Box key={item.id} sx={{ width : "100%" , height : "80%" , display : "flex" , flexDirection : (item.id % 2 ? "row-reverse" : "row") , justifyContent : "center" , alignItems : "center" , gap : "60px"}}>
                        <Box sx={{ width : "600px" , height : "400px"}}>
                            <Image  alt={"happy-chatting-detail-img"} src={item.imgUrl} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" , transition : "all 0.4s" }} />
                        </Box>
                        <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" }}>
                            <Typography variant="h5">{item.heading}</Typography>
                            {item.messages.map(mess => (
                                <Typography key={mess}>{mess}</Typography>
                            ))}
                        </Box>
                    </Box>
                )))
                : undefined}
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetail;

interface happyChattingType {
    id : number,
    imgUrl : string,
    heading : string,
    messages : string[]
}

const happyChattingDetails : happyChattingType[] = [
    {
        id : 0,
        imgUrl : "/happy-chatting3.png",
        heading : "Sign In",
        messages : [ "- Users can sign in easily and securely with their Google account" , "- I integrated NextAuth to provide secure and effortless sign-in with Google accounts"]
    },
    {
        id : 1,
        imgUrl : "/hc-main.png",
        heading : "Main Page",
        messages : [ "- In main page , user can see his chats with his friends and saved-messages" , "- There are also menu icon and search icon in top-bar"]
    },
    {
        id : 2,
        imgUrl : "/hc-sidebar.png",
        heading : "In Side Bar",
        messages : [ "- It offers simple UI to edit Profile , explore new friends and open Saved Messages" , "- Users can sign out in Settings" ]
    },
    {
        id : 3,
        imgUrl : "/hc-search.png",
        heading : "Search",
        messages : [ "- It offers easily , simple and efficient interface for searching" , "- User can search both friends and messages at the same time"]
    },
    {
        id : 4,
        imgUrl : "/hc-message.png",
        heading : "In chat",
        messages : [ "- Users can send messages , photos , emoji and voice" , "- Users can reply , copy , forward , edit and delete the messages" , "- And can also pin the messages to the top of the chat"]
    },
]