import About from "@/components/About";
import About2 from "@/components/About2";
import Projects from "@/components/Projects";
import TopBar from "@/components/TopBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={ { position : "relative" , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" , minHeight : "100vh" , width : "100vw" , overflowY : 'auto' , backgroundImage : "url('/pc.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"}}>
      <TopBar />
      <About2 />
      <Projects />
    </Box>
  );
}
