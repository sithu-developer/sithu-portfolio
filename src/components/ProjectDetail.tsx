"use client"
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Image from "next/image";
import { ProjectDetailItems } from "./Projects";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CircleIcon from '@mui/icons-material/Circle';

interface Props {
    projectDetailItems : ProjectDetailItems;
    setProjectDetailItems : (value : ProjectDetailItems) => void;
}

const ProjectDetail = ({ projectDetailItems , setProjectDetailItems } : Props) => {
    return (
        <Dialog open={projectDetailItems.open} fullScreen >
            <DialogContent sx={{ backgroundImage : "url('/lp.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"}}>
                <Box  sx={{ display : "flex" , justifyContent : "start", alignItems : "center" , gap : "20px" , py : "10px" , px : { xs : "10px" , sm : "30px"} , width : "100vw" , position : "fixed" , top : 0 , left : 0 , zIndex : 100  , backgroundColor: "rgba(64, 60, 60, 0.1)", backdropFilter :  "blur(10px)", }}>
                    <IconButton color="secondary" onClick={() => setProjectDetailItems({id : 0 , open : false})} >
                        <CloseRoundedIcon sx={{ color : "white"}} />
                    </IconButton>
                    <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" }, fontWeight : 600 , background : "linear-gradient(to right, #dde1e4ff , #2196f3, #21cbf3 , white)" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent" }} >{projectDetailItems.id === 1 ? "Happy Chatting" : "Digital Voting System"}</Typography>
                </Box>
                <Box sx={{ width : "100%" , minHeight : { xs : "95%" , sm :  "80%" } , display : "flex" , flexDirection : { xs : "column" , sm : "row"} , justifyContent : "center" , alignItems : "center" , gap : { xs : "20px" , sm :  "60px"} }}>
                    <Box sx={{ width : { xs : "100px" , sm : "160px"} , height : { xs : "200px" , sm : "300px" }}}>
                        <Image  alt={"hc"} src={(projectDetailItems.id === 1 ? "/hc-phone.png" : "/digital-voting-sign-in.png")} width={1000} height={1000} style={{  width : "auto" , height : "100%" , borderRadius : "5px"  }} />
                    </Box>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : { xs : "10px" , sm : "30px" } , width : { xs : "340px" , sm : "700px"} }}>
                        <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "#00bcd4" , fontWeight : 600 , textAlign : { xs : "center" , sm : "start" } }}>{(projectDetailItems.id === 1 ? "Happy Chatting" : "Digital Voting System")}</Typography>
                        <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px"}}>
                            <Typography sx={{ fontSize : "17px"}}>{(projectDetailItems.id === 1 ? "" : "")}A real-time messaging app built for simple, seamless conversations</Typography>
                            <Box sx={{ display : "flex" , gap : "10px" }}>
                                <CircleIcon sx={{ fontSize : 8 , color : "#00bcd4" , mt : "9px"}} />
                                <Typography>  
                                    <Box component={"span"} sx={{ color : "#00bcd4" , fontWeight : 600 ,}}>Real-Time Messaging</Box>
                                    <Box component={"span"}>- Stay connected instantly with friends, family, and customers</Box>
                                </Typography>
                            </Box>
                            <Box sx={{ display : "flex" , gap : "10px" }}>
                                <CircleIcon sx={{ fontSize : 8 , color : "#00bcd4" , mt : "9px"}} />
                                <Typography>  
                                    <Box component={"span"} sx={{ color : "#00bcd4" , fontWeight : 600 ,}}>Clean, Responsive Design</Box>
                                    <Box component={"span"}>- Inspired by Telegram, optimized for all devices</Box>
                                </Typography>
                            </Box>
                            <Box sx={{ display : "flex" , gap : "10px" }}>
                                <CircleIcon sx={{ fontSize : 8 , color : "#00bcd4" , mt : "9px"}} />
                                <Typography>  
                                    <Box component={"span"} sx={{ color : "#00bcd4" , fontWeight : 600 ,}}>Modern Tech Stack </Box>
                                    <Box component={"span"}>- Powered by Next.js, TypeScript, Material UI (MUI), NextAuth.js, Prisma ORM,Redux Toolkit, PostgreSQL, Vercel, and Aiven for PostgreSQL</Box>
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display : "flex" , alignItems : "center" , gap : "15px" , mt : { xs : "10px" , sm : "0px"} }}>
                            <Button component="a" href={(projectDetailItems.id === 1 ? "https://chatting-rust.vercel.app" : "https://digital-voting.vercel.app")} target="_blank" rel="noopener noreferrer" variant="outlined" sx={{ display :"flex" , alignItems : "center" , gap : "10px" , textTransform : "none" , boxShadow : "0px 0px 5px #2BCFFC" , transition : "all ease" , ":hover" : { boxShadow : "3px 3px 5px #2BCFFC"} }}>
                                <OpenInNewRoundedIcon sx={{ color : "#2BCFFC" , fontSize : "30px"}} />
                                <Typography sx={{ color : "#2BCFFC"}} >Live Demo</Typography>
                            </Button>
                            <Button component="a" href={(projectDetailItems.id === 1 ? "https://github.com/sithu-developer/chatting.git" : "https://github.com/sithu-developer/Digital-Voting.git")} target="_blank" rel="noopener noreferrer" variant="outlined" sx={{ display :"flex" , alignItems : "center" , gap : "10px" , textTransform : "none" , boxShadow : "0px 0px 5px #2BCFFC" , transition : "all ease" , ":hover" : { boxShadow : "3px 3px 5px #2BCFFC"} }}>
                                <Image alt="github icon" src={"/github-icon.svg"} width={500} height={500} style={{ width : "30px" , height : "auto" }} />
                                <Typography sx={{ color : "#2BCFFC"  }} >Code</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                    {projectDetailItems.id === 1 ? (happyChattingDetails.map(item => (
                        <Box key={item.id} sx={{ width : "100%"  , minHeight : "80%" , display : "flex" , flexDirection : { xs : "column" , sm : (item.id % 2 ? "row" : "row-reverse") } , justifyContent : "center" , alignItems : "center" , gap : { xs : "30px" , sm : "60px" }}}>
                            <Box sx={{ width : { xs : "350px" , sm : "600px" } , height : { xs : "220px" , sm : "400px" }}}>
                                <Image  alt={"happy-chatting-detail-img"} src={item.imgUrl} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" }} />
                            </Box>
                            <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px", maxWidth : "550px" }}>
                                <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "#00bcd4" , fontWeight : 600 }}>{item.heading}</Typography>
                                {item.messages.map(mess => (
                                    <Box key={mess} sx={{ display : "flex" , gap : "10px"}}>
                                        <CircleIcon sx={{ fontSize : 8 , mt : "9px" }} />
                                        <Typography>{mess}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )))
                    : (digitalVotingDetails.map(item => (
                        <Box key={item.id} sx={{ width : "100%"  , minHeight : { xs : "95%" , sm :  "80%" }, display : "flex" , flexDirection : { xs : "column" , sm : (item.id % 2 ? "row-reverse" : "row") } , justifyContent : "center" , alignItems : "center" , gap : { xs : "30px" , sm : "60px" }}}>
                            <Box sx={{ display : "flex" , gap : "10px"}}>
                                {item.imgUrls.map(url => (
                                    <Box key={url} sx={{ width : { xs : "105px" , sm : "185px"} , height : { xs : "200px" , sm : "350px" } }}>
                                        <Image  alt={"digital-voting-detail-img"} src={url} width={1000} height={1000} style={{  width : "auto" , height : "100%" , borderRadius : "5px" }} />
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px" , maxWidth : "550px" }}>
                                <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "#00bcd4" , fontWeight : 600 }}>{item.heading}</Typography>
                                {item.messages.map(mess => (
                                    <Box key={mess} sx={{ display : "flex" , gap : "10px"}}>
                                        <CircleIcon sx={{ fontSize : 8 , mt : "9px" }}  />
                                        <Typography>{mess}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )))}
                {/* </Box> */}
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetail;

interface HappyChattingDetailType {
    id : number,
    imgUrl : string,
    heading : string,
    messages : string[]
}

const happyChattingDetails : HappyChattingDetailType[] = [
    {
        id : 0,
        imgUrl : "/happy-chatting-laptop.png",
        heading : "Sign In",
        messages : [ "Users can sign in easily and securely with their Google account" , "I integrated NextAuth to provide secure and effortless sign-in with Google accounts"]
    },
    {
        id : 1,
        imgUrl : "/hc-main.png",
        heading : "Main Page",
        messages : [ "In main page , user can see his chats with his friends and saved-messages" , "There are also menu icon and search icon in top-bar"]
    },
    {
        id : 2,
        imgUrl : "/hc-sidebar.png",
        heading : "In Side Bar",
        messages : [ "It offers simple UI to edit Profile , explore new friends and open Saved Messages" , "Users can sign out in Settings" ]
    },
    {
        id : 3,
        imgUrl : "/hc-search.png",
        heading : "Search",
        messages : [ "It offers easily , simple and efficient interface for searching" , "User can search both friends and messages at the same time"]
    },
    {
        id : 4,
        imgUrl : "/hc-message.png",
        heading : "In chat",
        messages : [ "Users can send messages , photos , emoji and voice" , "Users can reply , copy , forward , edit and delete the messages" , "And can also pin the messages to the top of the chat"]
    },
];

interface DigitalVotingDetailType {
    id : number,
    imgUrls : string[],
    heading : string,
    messages : string[]
}


const digitalVotingDetails : DigitalVotingDetailType[] = [
    {
        id : 1,
        heading : "Admin Sign Up",
        imgUrls : [ "/digital-voting-sign-in.png" , "/digital-voting-admin-sign.png" , "/king-queen-page.png"  ],
        messages : [ "Authentication is running with Google" ,  "To become an admin, a user must sign in with their Gmail account and enter a specific admin code" , "For security purposes, the number of admin accounts is limited" , "The admin code and the maximum number of admin accounts can be modified by an existing administrator in the settings" , "Once a user successfully signs up as an admin, they are granted access to the features shown in the third photo" ]
    },
    {
        id : 2,
        heading : "Category Management",
        imgUrls : [ "/category-create.png" , "/category-update.png" , "/category-delete.png" ],
        messages : [ "The first image shows the interface for creating a new category, such as \"Miss\", complete with the ability to upload a corresponding photo, like a crown logo." , "The second image demonstrates the editing functionality, where an administrator can rename a category, change its photo, or update both the name and the photo simultaneously." , "Finally, the third image illustrates the process of deleting a category. To ensure security and prevent accidental removal, this action requires a unique and valid administrator code to be entered before the deletion can be completed." ]
    },
    {
        id : 3,
        heading : "Contestant Management",
        imgUrls : [ "/student-create.png" , "/student-after-create.png" , "/student-update-delete.png" ],
        messages : [ "In the same page, a new contestant can be created for the selected category" , "Each contestant is assigned a unique number to ensure there are no duplicates within that category" , "To update or delete a contestant, simply click on them to access their profile and make changes." ]
    },
    {
        id : 4,
        heading : "Agenda Management",
        imgUrls : [ "/agenda-page.png" , "/agenda-create.png" , "/agenda-update-delete.png"],
        messages : [ "The second icon on the sidebar provides access to the agenda page" , "You can create a new agenda simply by uploading a photo" ,  "Once an agenda photo is uploaded, you have the flexibility to download, replace, or delete it as needed" ]
    },
    {
        id : 5,
        heading : "Votes & Announce",
        imgUrls : [ "/votes-count-page.png" , "/votes-list.png" , "/votes-announcement.png"],
        messages : [ "The third icon on the sidebar will lead to the Votes and Announce page" , "In this page, you can monitor the real-time voting results for each contestant" , "To reveal the winners, simply press the \"Show Result\" button, which will announce the winner of each category" , "For security purposes, announcement can only be done with the valid administrator code"  ]
    },
    {
        id : 6,
        heading : "Setting",
        imgUrls : [ "/setting-page.png" , "/setting-admin-code.png" , "/setting-major-code.png"],
        messages : [ "The final icon on the sidebar will take to the setting page" , "In this page, the admin code and the number of administrator accounts can be changed" , "Additionally, this page allows you to create, update, or delete major codes for voters" , "To close voting from voters , simply press the \"Close Voting\" button" , "For security, all of these actions require a valid admin code to be entered before they can be executed" , "To sign out of the administrator account, simply press the sign-out button"]
    },
    // {
    //     id : 7,
    //     heading : "",
    //     imgUrls : [ "/" , "/" , "/"],
    //     messages : [ ]
    // },
    
]