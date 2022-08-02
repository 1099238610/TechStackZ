import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";

import TechInfo from "./TechInfo";

//import TechInfomation from './TechInfomation';

function TechInput() {

    const [techInput, setTechInput] = useState('');

    // useState, useEffect, useRef
    const handleTextChange = event => {
        setTechInput(event.target.value)
    }


    return (
        <div align={"center"}>
            <h1>TechStackZ</h1>
            <h2>BEST HELPER FOR PROGRAMMERS</h2>
            <TextField id="outlined-basic"
                       variant="outlined"
                       label="Enter A Technology"
                       value={techInput}
                       onChange={handleTextChange}/>
            <br/>
            <br/>
            <Link to={`/techinfo/${techInput}`}>
                <Button variant="contained"
                >Search</Button>
            </Link>
            <br/>
            <br/>
            <Link to={`/techinfo/java`}>
                <Button variant="contained" style={{backgroundColor:"darkviolet"}}
                >Java</Button>
            </Link>
            &nbsp;
            <Link to={`/techinfo/python`}>
                <Button variant="contained" style={{backgroundColor:"darkgreen"}}
                >Python</Button>
            </Link>
            &nbsp;
            <Link to={`/techinfo/javascript`}>
                <Button variant="contained" style={{backgroundColor:"darkred"}}
                >Javascript</Button>
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default TechInput;