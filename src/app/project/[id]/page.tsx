"use client"
import { Box } from "@mui/material";
import { useParams } from "next/navigation";

const ProjectDetail = () => {
    const params = useParams();
    
    return (
        <Box>{params.id}</Box>
    )
}

export default ProjectDetail;