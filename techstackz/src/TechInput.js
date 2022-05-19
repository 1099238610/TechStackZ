import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import TechInfo from './TechInfo';

function TechInput(){

    const [techInput, setTechInput] = useState('');
    const handleTextChange = event =>{
        setTechInput(event.target.value)
    }
    const search = () =>{
        /* direct to tech info page component*/
        // <TechInfo data={techInput}/>
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