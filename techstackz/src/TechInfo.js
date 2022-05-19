import React, {useState} from 'react'
import {Grid} from "@mui/material";
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";


function TechInfo(props) {
    const [techInfo, setTechInfo] = useState('');
    const handleTextChange = event => {
        setTechInfo(event.target.value);
    }

    return (
        <div >
            <Grid contrainer sx={{m:10}}>
                <h1>{props.techname}</h1>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TechName introduction="Python is a multi-paradigm, dynamically typed,"/>
                    </Grid>
                    <Grid item xs={4}>
                        <AvailableTutorial availabletutorial={"GeeksForGeeks Python Tutorial, W3Schools Python Tutorial"}/>
                    </Grid>
                    <Grid item xs={4}>
                        <SimilarTechnology similartechnology={"Java"}/>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <StackOverflow stackoverflow={"123"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Mapping maps={"123"}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

function TechName(props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor:"lightgray"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Introduction
                </Typography>
                <Typography variant="body2">
                    {props.introduction}
                </Typography>
            </CardContent>
        </Card>
    );
}

function AvailableTutorial(props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor:"lightgray"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Available Tutorial
                </Typography>
                <Typography variant="body2">
                    {props.availabletutorial}
                </Typography>
            </CardContent>
        </Card>
    );
}

function SimilarTechnology(props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor:"lightgray"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Similar technology
                </Typography>
                <Typography variant="body2">
                    {props.similartechnology}
                </Typography>
            </CardContent>
        </Card>
    )
}

function StackOverflow(props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor:"lightgray"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    StackOverflow
                </Typography>
                <Typography variant="body2">
                    {props.stackoverflow}
                </Typography>
            </CardContent>
        </Card>
    )
}

function Mapping(props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor:"lightgray"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Maps
                </Typography>
                <Typography variant="body2">
                    {props.maps}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TechInfo;