"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette : {
        primary : {
            main : "#27374D"
            // 001F3F
        },
        secondary : {
            main : "#2c89fcff"
            //3A6D8C
        },
        text : {
            primary : "white"
        }
    },
    typography : {
        // fontFamily : "serif"
        fontFamily : "system-ui",
    },
    
})