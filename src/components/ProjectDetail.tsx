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
                {/* <Box sx={{ width : "100%" , height : "100%" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                    <Box sx={{ width : "380px" , height : "300px"}}>
                        <Image  alt={"hc"} src={"/happy-chatting.png"} width={1000} height={1000} style={{  width : "auto" , height : "100%" , borderRadius : "5px" , transition : "all 0.4s" }} />
                    </Box>
                </Box> */}
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDetail;