import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import TechInfo from './TechInfo';

function TechInput(){
    const [techInput, setTechInput] = useState('');
    const url = "https://54.252.231.242:8888/info/all"
    const handleTextChange = event =>{
        setTechInput(event.target.value)
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
            .then(response => response.text())
            .then(result => console.log(result))
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
            <Button variant="contained"
            onClick={search}
            >Search</Button>
        </div>
    );
}

export default TechInput;