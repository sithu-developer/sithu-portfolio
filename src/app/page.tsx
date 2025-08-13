
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopBar from "@/components/TopBar";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <Box sx={ { position : "relative" , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" , minHeight : "100vh" , width : "100vw" , overflowY : 'auto' , bgcolor : "primary.main"  , backgroundImage : "url('/lp.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"}}>
      <TopBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Box>
  );
}


//  , backgroundImage : "url('/pc.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"
//  , backgroundImage : "url('/ssbg-dark.png')" , backgroundRepeat : "no-repeat" , backgroundPosition : "center" , backgroundAttachment : "fixed" , backgroundSize : "cover"