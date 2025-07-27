import About from "@/components/About";
import Projects from "@/components/Projects";
import TopBar from "@/components/TopBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={ { position : "relative" , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" , minHeight : "100vh" , width : "100vw" , overflowY : 'auto' , backgroundImage : "url('/darkBg.jpg')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"}}>
      <TopBar />
      <About />
      <Projects />
    </Box>
  );
}
