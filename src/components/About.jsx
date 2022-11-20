//import { Box, Typography } from "@mui/material";
import React from "react";
import {Send} from '@mui/icons-material';
import "./Book/About.css"
const About = () => {
    
  return (
    <div className="mystyle"> 
    <h1>
        NEWSLETTER 
    </h1>
    <h2 >
        Always in touch for your favorite products !!!
    </h2>

    <div>
        <input    
        type="email" 
        placeholder='email' />
        <button>
            <Send />
        </button>
    </div>
</div>
  );
}

export default About;