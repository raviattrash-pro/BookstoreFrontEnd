import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./Book/AddBook.css";
  const AddBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      description: "",
      price: "",
      author: "",
  
      image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/books", {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/books"));
    };
  
    return (
      <div className="Addbookmain">
      <form onSubmit={handleSubmit}   >
        <Box bgcolor="lightblue" p={1}
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={2}
          marginBottom={2}
          borderRadius={2.5}
          boxShadow ="0 8px 32px 0 rgba(30, 43, 223, 1)"
        >
          <h1 className="titleBook">BOOK Details</h1>
          <FormLabel>Name</FormLabel>
          <TextField className="Addbookinput"
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="standard"
            name="name"
          />
          <FormLabel>Author</FormLabel>
          <TextField className="Addbookinput"
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="standard"
            name="author"
          />
          <FormLabel>Description</FormLabel>
          <TextField className="Addbookinput"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="standard"
            name="description"
          />
          <FormLabel>Price</FormLabel>
          <TextField className="Addbookinput"
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="standard"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField className="Addbookinput"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="standard"
            name="image"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          />
  
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
      </div>
    );
  };
  
  export default AddBook;