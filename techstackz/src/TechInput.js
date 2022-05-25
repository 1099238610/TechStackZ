import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TechInfo from "./TechInfo";

//import TechInfo from './TechInfo';

function TechInput() {

    const [techInput, setTechInput] = useState('');

    // useState, useEffect, useRef
    const handleTextChange = event => {
        setTechInput(event.target.value)
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const url = "http://54.252.231.242:8888/info/all"
    const raw = JSON.stringify({
        "tagName": techInput
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const search = () =>{
        /* direct to tech info page component*/
        // <TechInfo data={techInput}/>
        fetch(url, requestOptions)
            .then(response => response.json())
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <h1>TechStackz</h1>
            <h2>BEST HELPER FOR PROGRAMMERS</h2>
            <TextField id="outlined-basic"
            variant="outlined"
            label="Enter A Technology"
            value= {techInput}
            onChange= {handleTextChange}/>
            <Link to={`/techinfo/${techInput}`}>
            <Button variant="contained"
            >Search</Button>
            </Link>
        </div>
    );
}

export default TechInput;