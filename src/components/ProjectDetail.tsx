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

    if(!projectDetailItems.selectedProject) return null;

    return (
        <Dialog open={projectDetailItems.open} fullScreen >
            <DialogContent sx={{ backgroundImage : "url('/lp.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"}}>
                <Box  sx={{ display : "flex" , justifyContent : "start", alignItems : "center" , gap : "20px" , py : "10px" , px : { xs : "10px" , sm : "30px"} , width : "100vw" , position : "fixed" , top : 0 , left : 0 , zIndex : 100  , backgroundColor: "rgba(64, 60, 60, 0.1)", backdropFilter :  "blur(10px)", }}>
                    <IconButton color="secondary" onClick={() => setProjectDetailItems({selectedProject : null , open : false})} >
                        <CloseRoundedIcon sx={{ color : "white"}} />
                    </IconButton>
                    <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" }, fontWeight : 600 , background : "linear-gradient(to right, #dde1e4ff , #2196f3, #21cbf3 , white)" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent" }} >{projectDetailItems.selectedProject.name}</Typography>
                </Box>
                <Box sx={{ width : "100%" , minHeight : { xs : "95%" , sm :  "80%" } , display : "flex" , flexDirection : { xs : "column" , sm : "row"} , justifyContent : "center" , alignItems : "center" , gap : { xs : "10px" , sm :  "60px"} , pt : { xs : "50px" , sm : "0px"} }}>
                    <Box sx={{ width : "auto" , height : { xs : "200px" , sm : "300px" }}}>
                        <Image  alt={"hc"} src={projectDetailItems.selectedProject.headingUrl} width={1000} height={1000} style={{  width : "auto" , height : "100%" , borderRadius : "5px"  }} />
                    </Box>
                    <Box sx={{ display : "flex" , flexDirection : "column" , gap : { xs : "10px" , sm : "30px" } , width : { xs : "340px" , sm : "700px"} }}>
                        <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "#00bcd4" , fontWeight : 600 , textAlign : { xs : "center" , sm : "start" } }}>{projectDetailItems.selectedProject.name}</Typography>
                        <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px"}}>
                            <Typography sx={{ fontSize : "17px"}}>{projectDetailItems.selectedProject.headingTypo}</Typography>
                            {(projectDetailItems.selectedProject.headingDetail).map(item => (
                                <Box key={item.id} sx={{ display : "flex" , gap : "10px" }}>
                                    <CircleIcon sx={{ fontSize : 8 , color : "#00bcd4" , mt : "9px"}} />
                                    <Typography>  
                                        <Box component={"span"} sx={{ color : "#00bcd4" , fontWeight : 600 }}>{item.heading}</Box>
                                        <Box component={"span"}>{item.about}</Box>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display : "flex" , alignItems : "center" , gap : "15px" , mt : { xs : "10px" , sm : "0px"} }}>
                            <Button component="a" href={(projectDetailItems.selectedProject.liveDemo)} target="_blank" rel="noopener noreferrer" variant="outlined" sx={{ display :"flex" , alignItems : "center" , gap : "10px" , textTransform : "none" , boxShadow : "0px 0px 5px #2BCFFC" , transition : "all ease" , ":hover" : { boxShadow : "3px 3px 5px #2BCFFC"} }}>
                                <OpenInNewRoundedIcon sx={{ color : "#2BCFFC" , fontSize : "30px"}} />
                                <Typography sx={{ color : "#2BCFFC"}} >Live Demo</Typography>
                            </Button>
                            <Button component="a" href={(projectDetailItems.selectedProject.codeSource)} target="_blank" rel="noopener noreferrer" variant="outlined" sx={{ display :"flex" , alignItems : "center" , gap : "10px" , textTransform : "none" , boxShadow : "0px 0px 5px #2BCFFC" , transition : "all ease" , ":hover" : { boxShadow : "3px 3px 5px #2BCFFC"} }}>
                                <Image alt="github icon" src={"/github-icon.svg"} width={500} height={500} style={{ width : "30px" , height : "auto" }} />
                                <Typography sx={{ color : "#2BCFFC"  }} >Code</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {projectDetailItems.selectedProject.bodyDetail.map(item => (
                    <Box key={item.id} sx={{ width : "100%"  , minHeight : { xs : "95%" , sm :  "80%" }, display : "flex" , flexDirection : { xs : "column" , sm : (item.id % 2 ? "row-reverse" : "row") } , justifyContent : "center" , alignItems : "center" , gap : { xs : "30px" , sm : "60px" }}}>
                        <Box sx={{ display : "flex" , gap : "10px"}}>
                            {item.imgUrls.map(url => ( 
                                <Box key={url} sx={{ width : "auto" , height : { xs : "200px" , sm : "350px" } }}> {/* here */}
                                    <Image  alt={item.heading} src={url} width={1000} height={1000} style={{  width : "auto" , height : "100%" , borderRadius : "5px" }} />
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
                ))}
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetail;

// projectDetailItems.id === 1 ? (happyChattingDetails.map(item => (
//     <Box key={item.id} sx={{ width : "100%"  , minHeight : "80%" , display : "flex" , flexDirection : { xs : "column" , sm : (item.id % 2 ? "row" : "row-reverse") } , justifyContent : "center" , alignItems : "center" , gap : { xs : "30px" , sm : "60px" }}}>
//         <Box sx={{ width : { xs : "350px" , sm : "600px" } , height : { xs : "220px" , sm : "400px" }}}>
//             <Image  alt={"happy-chatting-detail-img"} src={item.imgUrl} width={1000} height={1000} style={{  width : "100%" , height : "auto" , borderRadius : "5px" }} />
//         </Box>
//         <Box sx={{ display : "flex" , flexDirection : "column" , gap : "10px", maxWidth : "550px" }}>
//             <Typography sx={{ fontSize : { xs : "30px" , sm : "35px" } , color : "#00bcd4" , fontWeight : 600 }}>{item.heading}</Typography>
//             {item.messages.map(mess => (
//                 <Box key={mess} sx={{ display : "flex" , gap : "10px"}}>
//                     <CircleIcon sx={{ fontSize : 8 , mt : "9px" }} />
//                     <Typography>{mess}</Typography>
//                 </Box>
//             ))}
//         </Box>
//     </Box>
// )))
// : 

export interface HeadingDetail {
    id : number;
    heading : string;
    about : string;
}

export const malaMaocaiHeadingDetails : HeadingDetail[] = [
    {
        id : 1,
        heading : "About ",
        about : "- Platform that is bridging the gap between hungry customers and efficient kitchen management"
    },
    {
        id : 2 ,
        heading : "UI & UX ",
        about :"- The UI design is very easy to use and the decoration is specialized for Mala Maocai"
    },
    {
        id : 3 ,
        heading : "My Role ",
        about :"- As the solo developer, I was responsible for the entire full-stack development of this application"
    },
    {
        id : 4 ,
        heading : "Modern Tech Stack ",
        about :"- Powered by Next.js(App Router), TypeScript, Tailwind CSS, NextAuth.js, Prisma ORM,Redux Toolkit, MongoDB, Vercel, and MongoDB Atlas"
    },
]

export const digitalVotingHeadingDetails : HeadingDetail[] = [
    {
        id : 1 ,
        heading : "About ",
        about :"- A digital voting platform designed to streamline elections for university events."
    },
    {
        id : 2 ,
        heading : "User-Friendly Design ",
        about :"- The application's design prioritizes a simple and intuitive user experience for both administrators and voters"
    },
    {
        id : 3 ,
        heading : "My Role ",
        about :"- As the solo developer, I was responsible for the entire full-stack development of this application"
    },
    {
        id : 4 ,
        heading : "Modern Tech Stack ",
        about :"- Powered by Next.js, TypeScript, Material UI (MUI), NextAuth.js, Prisma ORM,Redux Toolkit, PostgreSQL, Vercel, and Render for managing PostgreSQL"
    },
   
]

export const happyChattingHeadingDetails : HeadingDetail[] = [
    {
        id : 1 ,
        heading : "About",
        about :"- A real-time messaging app built for simple, seamless conversations"
    },
    {
        id : 2 ,
        heading : "Clean, Responsive Design ",
        about :"- Inspired by Telegram, optimized for all devices"
    },
    {
        id : 3 ,
        heading : "My Role ",
        about :"- As the solo developer, I was responsible for the entire full-stack development of this application"
    },
    {
        id : 4 ,
        heading : "Modern Tech Stack ",
        about :"- Powered by Next.js, TypeScript, Material UI (MUI), NextAuth.js, Prisma ORM,Redux Toolkit, PostgreSQL, Vercel, and Aiven for managing PostgreSQL"
    },
    
]


export interface BodyDetailType {
    id : number,
    imgUrls : string[],
    heading : string,
    messages : string[]
}

export const malaMaocaiDetails : BodyDetailType[] = [
    {
        id : 7,
        imgUrls : ["/maocai-customer-main.png"],
        heading : "Customer main",
        messages : []
    },
    {
        id : 8,
        imgUrls : ["/maocai-order-maocai.png"],
        heading : "Order Maocai",
        messages : []
    },
    {
        id : 9,
        imgUrls : ["/maocai-voucher.png"],
        heading : "Order Voucher",
        messages : []
    },
    {
        id : 10,
        imgUrls : ["/maocai-spicylevel.png"],
        heading : "spicylevel",
        messages : []
    },
    {
        id : 11,
        imgUrls : ["/maocai-orderListIcon.png"],
        heading : "Orderlist icon",
        messages : []
    },
    {
        id : 12,
        imgUrls : ["/maocai-orderlist.png"],
        heading : "Orderlist",
        messages : []
    },
    {
        id : 1,
        imgUrls : [ "/maocai-admin-signin.png" ],
        heading : "Admin Sign In",
        messages : [ "Admin can easily sign up with Google to create new company" , "Or sign in with Google acc that is already signed up" ]
    },
    {
        id : 2,
        imgUrls : [ "/maocai-modification.png" ],
        heading : "Category Modification",
        messages : [ "After that, categories can be created, updated and deleted in this page." , "Recomment that the maximum numbers of category should be three!"]
    },
    {
        id : 3,
        imgUrls : ["/maocai-food-modification.png"],
        heading : "Food Modification",
        messages : []
    },
    {
        id : 4,
        imgUrls : ["/maocai-table-modification.png"],
        heading : "Table Modification",
        messages : []
    },
    {
        id : 5,
        imgUrls : ["/maocai-setting.png"],
        heading : "Settings",
        messages : []
    },
    {
        id : 6,
        imgUrls : ["/maocai-order-admin.png"],
        heading : "Order from Admin",
        messages : []
    },
]

export const happyChattingDetails : BodyDetailType[] = [
    {
        id : 0,
        imgUrls : ["/happy-chatting-laptop.png"],
        heading : "Sign In",
        messages : [ "Users can sign in easily and securely with their Google account" , "I integrated NextAuth to provide secure and effortless sign-in with Google accounts"]
    },
    {
        id : 1,
        imgUrls : ["/hc-main.png"],
        heading : "Main Page",
        messages : [ "In main page , user can see his chats with his friends and saved-messages" , "There are also menu icon and search icon in top-bar"]
    },
    {
        id : 2,
        imgUrls : ["/hc-sidebar.png"],
        heading : "In Side Bar",
        messages : [ "It offers simple UI to edit Profile , explore new friends and open Saved Messages" , "Users can sign out in Settings" ]
    },
    {
        id : 3,
        imgUrls : ["/hc-search.png"],
        heading : "Search",
        messages : [ "It offers easily , simple and efficient interface for searching" , "User can search both friends and messages at the same time"]
    },
    {
        id : 4,
        imgUrls : ["/hc-message.png"],
        heading : "In chat",
        messages : [ "Users can send messages , photos , emoji and voice" , "Users can reply , copy , forward , edit and delete the messages" , "And can also pin the messages to the top of the chat"]
    },
];


export const digitalVotingDetails : BodyDetailType[] = [
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
        heading : "Admin Settings",
        imgUrls : [ "/setting-page.png" , "/setting-admin-code.png" , "/setting-major-code.png"],
        messages : [ "The final icon on the sidebar will take to the settings page" , "In this page, the admin code and the number of administrator accounts can be changed" , "Additionally, this page allows you to create, update, or delete major codes for voters" , "To close voting from voters , simply press the \"Close Voting\" button" , "For security, all of these actions require a valid admin code to be entered before they can be executed" , "To sign out of the administrator account, simply press the sign-out button"]
    },
    {
        id : 7,
        heading : "Voter Sign Up",
        imgUrls : [ "/voter-sign.png" , "/voter-voting-page.png" ],
        messages : [ "Like in Admin sign-up, a voter can sign up with google with major code" , "To ensure fair voting, the number of voters is limited for each major" , "The major code and the maximum number of voter accounts can also be modified by an admin in the settings" , "After a user successfully signs up as a voter, they will be automatically redirected to the voting page" ]
    },
    {
        id : 8,
        heading : "Voting Page",
        imgUrls : [ "/voter-vote.png" , "/voter-revote.png"],
        messages : [ "On the voting page, voters can easily cast their vote for each contestant across different categories" , "If a voter changes their mind, the system allows them to re-vote for a different contestant" ]
    },
    {
        id : 9,
        heading : "Thanks For Voting Page",
        imgUrls : [ "/voter-thank.png" , "/voter-thank-revote.png" , "/voter-thank-submited.png"],
        messages : [ "Once they've completed voting for all categories,  voters will be automatically directed to the thank-for-voting page" , "Here, voters can review their selections and re-vote until they submit their final choices" ]
    },
    {
        id : 10,
        heading : "Voter Settings",
        imgUrls : [ "/voter-setting.png" , "/voter-rename.png" , "/voter-agenda.png"],
        messages : [ "To access their Settings, voters must press the settings icon located in the top-left corner of the page" , " Within these settings, they have the ability to rename their profile and view the event agenda" , "They can also sign out from here" ]
    },
    {
        id : 11,
        heading : "Result Page",
        imgUrls : [ "/voter-closed-voting.png" , "/voter-show-results.png" , "/voter-announced.png"],
        messages : [ "When an administrator closes the vote from the Admin Settings page, all voters are automatically redirected to the Results page" , " For security, they can't return to previous pages or cast any more votes" , "When an administrator reveals the winners from their side, the results will appear instantly on the Voters' Results page, showing the winner for each category"]
    },
    // {
    //     id : 12,
    //     heading : "",
    //     imgUrls : [ "/" , "/" , "/"],
    //     messages : [ ]
    // },
    
    
]