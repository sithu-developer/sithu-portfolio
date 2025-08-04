"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Slide } from "@mui/material";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{ width: "100vw", height: "100vh", p: 4 }}
    >
      <Slide direction="up" in={visible} timeout={800}>
        <Box
          sx={{
            width: 300,
            height: 200,
            bgcolor: "skyblue",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
            mx: "auto",
          }}
        >
          I slid in on scroll!
        </Box>
      </Slide>
    </Box>
  );
};

export default Projects;
