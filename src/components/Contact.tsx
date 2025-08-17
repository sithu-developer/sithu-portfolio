"use client"
import { Box, Button, IconButton, TextField, Typography } from "@mui/material"
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { SvgIconComponent } from "@mui/icons-material";
import { useState } from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    const [ copiedIds , setCopiedIds ] = useState<number[]>([]);

    return (
        <Box sx={{ width : "100vw" , minHeight : "100vh" , display : "flex" , flexDirection : "column" , justifyContent : "start" , alignItems : "center"  , pt : "95px" , gap : "20px" }}>
            <Typography variant="h4" sx={{ color : "white" , fontWeight : 600  }}>Get In <Box component={"span"} sx={{  background : "linear-gradient(to right , #2196f3, #21cbf3 , #dde1e4ff )" , backgroundClip : "text" , WebkitBackgroundClip : "text" , WebkitTextFillColor : "transparent" }} >Touch</Box></Typography>
            <Typography sx={{ color : "text.primary" , textAlign : "center"}}>Something here , Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
            <Box sx={{ display : "flex" , flexDirection : { xs : "column" , sm : "row" } , gap : "80px"}}>
                <Box sx={{ display : "flex" , flexDirection : 'column' , gap : "20px" }}>
                    <Typography variant="h5" sx={{ color : "text.primary" , fontWeight : 600 , textAlign : "center" }} >Contact Information</Typography>
                    {contactItems.map(item => (
                        <Box key={item.id} sx={{ display : "flex" , justifyContent : "space-between" , alignItems : "center" , gap : "10px" , backgroundColor: "rgba(19, 17, 17, 0.1)", backdropFilter :  "blur(10px)" , p : "5px 10px" , borderRadius : "10px"}}>
                            <Box sx={{ bgcolor : "#21cdf31e" , width : "35px" , height : "35px" , borderRadius : "20px" , display : "flex" , justifyContent : "center" , alignItems : "center" }}>
                                <item.icon sx={{ color : "#21cbf3"}} />
                            </Box>
                            <Box sx={{ flexGrow : 1}}>
                                <Typography sx={{ fontSize : "12px" , lineHeight : 0.5 , color : "#21cbf3"}} >{item.name}</Typography>
                                <Typography sx={{ color : "text.primary"}}>{item.value}</Typography>
                            </Box>
                            { copiedIds.includes(item.id) ?
                            <IconButton>
                                <DoneRoundedIcon sx={{ color : "GrayText"}} />
                            </IconButton>
                            :<IconButton onClick={async() => {
                                await navigator.clipboard.writeText(item.value);
                                setCopiedIds((prev) => [...prev , item.id])
                                setTimeout(() => {
                                    setCopiedIds((prev) => prev.filter(eachPrev => eachPrev !== item.id) )
                                } , 2000)
                            }}>
                                <ContentCopyRoundedIcon sx={{ color : "GrayText"}} />
                            </IconButton>
                            }
                        </Box>
                    ))}
                    <Box>
                        <Typography sx={{ color : "#21cbf3" , textAlign : "center" , mt : "20px" , fontWeight : 500 }} >Connect With Me</Typography>
                        <Box sx={{ display : "flex" , alignItems : "center" , justifyContent : "center" , gap : "10px"}}>
                            <IconButton component={"a"} target="_blank" rel="noopener noreferrer" href="https://t.me/SithuNaing8209" >
                                <TelegramIcon sx={{ color : "#21cbf3" , transition : "all ease" , ":hover" : { transform : "translateY(-3px)" , scale : 1.2} }}  />
                            </IconButton>
                            <IconButton component="a" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/1YvXsd74nr/"  >
                                <FacebookIcon sx={{ color : "#21cbf3" , transition : "all ease" , ":hover" : { transform : "translateY(-3px)" , scale : 1.2} }} />
                            </IconButton>
                            <IconButton component="a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sithunaing8209?igsh=cjkwd2QybGtha210" >
                                <InstagramIcon sx={{ color : "#21cbf3" , transition : "all ease" , ":hover" : { transform : "translateY(-3px)" , scale : 1.2} }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display : "flex" , flexDirection : "column" , gap : "15px" , alignItems : "center" , width : { xs : "100vw" , sm : "400px"}  , p : "20px" , borderRadius : "10px" , bgcolor : "rgba(115, 139, 149, 0.1)" , backdropFilter : "blur(10px)"}}>
                    <Typography variant="h5" sx={{ color : "text.primary" , fontWeight : 600 , textAlign : "center" }} >Send a Message</Typography>
                    <TextField label="Your name" color="info"
                        slotProps={{
                            inputLabel: {
                                sx : { color: "lightblue" } // label color
                            } 
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "lightblue" // default border
                                }
                            },
                            width : "90%"
                        }}
                    />
                    <TextField label="Your Email" color="info"
                        slotProps={{
                            inputLabel: {
                                sx : { color: "lightblue" } // label color
                            } 
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "lightblue" // default border
                                }
                            },
                            width : "90%"
                        }}
                    />
                    <TextField multiline rows={4} label="Your Message" color="info"
                        slotProps={{
                            inputLabel: {
                                sx : { color: "lightblue" } // label color
                            } 
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "lightblue" // default border
                                }
                            },
                            width : "90%"
                        }}
                    />
                    <Button variant="contained" sx={{ bgcolor : "#21cbf3" , color : "black" , textTransform : "none" , width : "calc(100% - 35px)"}} >Send Message</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact;

interface ContactItemType {
    id : number
    name : string
    value : string
    icon : SvgIconComponent
}

const contactItems : ContactItemType[] = [
    {
        id : 1,
        name : "Email",
        value : "sithunaing8209@gmail.com",
        icon : MailRoundedIcon
    },
    {
        id : 2,
        name : "Phone",
        value : "+959 754546909",
        icon : LocalPhoneRoundedIcon
    },
    {
        id : 3,
        name : "Location",
        value : "Mandalay, Myanmar",
        icon : LocationOnRoundedIcon
    },
    
]