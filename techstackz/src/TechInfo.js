import React, {useEffect, useState} from 'react'
import {Grid} from "@mui/material";
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import {useHistory, useParams} from "react-router-dom";
import Footer from "./footer";


function TechInfo(props) {
    const [techInfo, setTechInfo] = useState('');
    const [synonms,setSynonms] =useState("");
    const [topTenQuestion,setTopTenQuestion] =useState("");
    const handleTextChange = event => {
        setTechInfo(event.target.value);
    }



    var retrieveUrlParams = () => {
        console.log(props);
    }
    const {tagName} = useParams();
    var info = "";

    React.useEffect(()=>{
         axios({
    method: 'post', //you can set what request you want to be
    url: 'http://3.26.190.60:8888/info/all',
    data: {"tagName":tagName},
    headers: {
        "Content-Type": "application/json"
    }
    }).then(result=> {
        console.log(result)
        setTechInfo(result.data.data.excerpt);
        let synonyms = ""
        for (let i = 0; i < result.data.data.synonyms.length; i++) {
            synonyms += result.data.data.synonyms[i] + "\n";
        }
        console.log(synonyms)
        setSynonms(synonyms);

        let topQuestions = ""
        for (let i = 0; i < result.data.data.topTenQuestion.length; i++) {
            topQuestions += result.data.data.topTenQuestion[i].link + "\n" + result.data.data.topTenQuestion[i].title + "\n";
        }
        console.log(topQuestions)
        setTopTenQuestion(topQuestions)
        console.log(synonms.length)
        
    });

    console.log(techInfo);
    },[1]);

    return (
        <div>
            <Navbar/>
            <Grid contrainer sx={{m: 10}}>
                <h1>{tagName.toUpperCase()}</h1>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TechName introduction={techInfo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <AvailableTutorial
                            availabletutorial={"GeeksForGeeks Tutorial, W3Schools Tutorial"}/>
                    </Grid>
                    <Grid item xs={4}>
                        <SimilarTechnology similartechnology={synonms}/>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <StackOverflow stackoverflow={topTenQuestion}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Mapping maps={"Map box holder"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    );
}

function TechName(props) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor: "lightgray"}}>
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
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor: "lightgray"}}>
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
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor: "lightgray"}}>
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
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor: "lightgray"}}>
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
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}} style={{backgroundColor: "lightgray"}}>
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