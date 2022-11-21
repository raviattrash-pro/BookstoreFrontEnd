import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import './BookDetails.css';
  
  const BookDetails = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res)=> res.data)
          .then((data)=> setInputs(data.book));

          console.log("Fello call input :"+inputs);
      };
      fetchHandler();
    },[id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/books/${id}`, {
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
      sendRequest().then(() => history("/books"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    
  
    return (
      <div className="update">
        {inputs && (
          <form onSubmit={handleSubmit}>
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
              <h1 className="Updatetitle">Update BOOK Details</h1>
              <FormLabel>Name</FormLabel>
              <TextField className="inputupdate"
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="standard"
                name="name"
              />
              <FormLabel>Author</FormLabel>
              <TextField className="inputupdate"
                value={inputs.author}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="standard"
                
                name="author"
              />
              <FormLabel>Description</FormLabel>
              <TextField className="inputupdate"
                value={inputs.description}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="standard"
                name="description"
              />
              <FormLabel>Price</FormLabel>
              <TextField className="inputupdate"
                value={inputs.price}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="standard"
                name="price"
              />
              <FormLabel>Image</FormLabel>
              <TextField className="inputupdate"
                value={inputs.image}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="standard"
                name="image"

              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />
  
              <Button variant="contained" type="submit">
                Update Book
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default BookDetails;