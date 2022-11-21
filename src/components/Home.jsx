import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
//import Announce from './Mycomponent/Announce';
import "./Home.css";
import Slider from "./Mycomponent/Slider";
const Home = () => {
  return (
    <div className="HomeDiv">
      <br />
      <Slider />
      <Box display="flex" flexDirection="column" alignItems="center" marginTop={0}>
        <Button 
          LinkComponent={Link}  
          to="/books"
          sx={{ marginTop:-4, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;