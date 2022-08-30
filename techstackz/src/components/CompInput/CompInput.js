import React, {useState} from "react";
import TextField from "@mui//material/TextField";
import "./CompInput.css";
import Button from "@mui/material/Button";
import Box from  "@mui/material/Box";
import CardItem from "../Card/CardAfterComp";
import { Grid } from "@mui/material";


function CompInput (){
    const [firstUserInput,setFirstUserInput] = useState("");
    const [secondUserInput,setSecondUserInput] = useState("");
    const [showTextField, setShowTextField] = useState(false);

    const handleClick = () => {
        setShowTextField(true);
    }
 
    
    return (
    <div className="App">
    
    <Box
      m={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
        <TextField
     
          required
          id="outlined-required"
          label="first technology"
          defaultValue="Java"
          value={firstUserInput}
          onChange={(e)=>{setFirstUserInput(e.target.value)}}
        style={{
        margin:"6em",
        }}
        />
        
         <TextField
          required
          id="secondTech_input"
          label="second technology"
          defaultValue="Python"
          value={secondUserInput}
          onChange={(e)=>{setSecondUserInput(e.target.value)}}
            style={{
        margin:"6em"
        }}
        />

      <Button 
      variant="contained"
      disabled = {!(firstUserInput&&secondUserInput)}
      style={{
        margin:"6em",
        }}
        onClick={handleClick} >Compare</Button>
      </Box>
      {showTextField && 
      <Grid container spacing={4} marginBottom="2em">
        <Grid item xs={6} >
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6} >
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6}>
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6}>
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6} >
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6} >
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6}>
            <CardItem></CardItem>
        </Grid>
        <Grid item xs={6}>
            <CardItem></CardItem>
        </Grid>

      </Grid>
      
      }

    </div>
  );


}

export default CompInput;