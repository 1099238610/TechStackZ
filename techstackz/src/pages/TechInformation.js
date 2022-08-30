import React, {useState, useEffect} from "react";
import '../App.css'
import {useParams} from "react-router-dom";
import axios from "axios";
import InfoCard from "../components/Card/InfoCard";
import { Grid } from "@mui/material";

function TechInformation(props) {
  const [techInfo, setTechInfo] = useState('')
  const [synonyms, setSynonyms] = useState('')
  const [topTenQuestion, setTopTenQuestion] = useState('')
  const [tutorialLink,setTutorialLink] = useState('')
  const {tagName} = useParams()

  React.useEffect(()=>{
    console.log(tagName)
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
      setSynonyms(synonyms);

      let topQuestions = ""
      for (let i = 0; i < result.data.data.topTenQuestion.length; i++) {
        topQuestions += result.data.data.topTenQuestion[i].link + "\n" + result.data.data.topTenQuestion[i].title + "\n";
      }
      console.log(topQuestions)
      setTopTenQuestion(topQuestions)
      console.log(synonyms.length)



      let links = ""
      for (let i = 0; i < result.data.data.tutorialLink.length; i++) {
        links += result.data.data.tutorialLink[i] + "\n" ;
      }

      setTutorialLink(links)

    });
    console.log(techInfo);
  },[1]);

  return(

     <>
      <div>
        <br></br>
      <h1>{tagName.toUpperCase()}</h1>
      

      <Grid container spacing={2} marginBottom="5em">
        <Grid item xs={12} >
            <InfoCard InfoName = {"Introduction"} tagInfo = {techInfo}/>
        </Grid>
        <Grid item xs={12} >
            <InfoCard InfoName = {"Synonyms"} tagInfo = {synonyms}/>
        </Grid>
        <Grid item xs={12}>
          <InfoCard InfoName = {"Stack Overflow Top Ten Questions"} tagInfo = {topTenQuestion}/>
            
        </Grid>
        <Grid item xs={6}>
          <InfoCard InfoName = {"Tutorial Link"} tagInfo = {tutorialLink}/>
            
        </Grid>
        <Grid item xs={6} >
            
        </Grid>
        <Grid item xs={6} >
            
        </Grid>
        <Grid item xs={6}>
            
        </Grid>
        <Grid item xs={6}>
           
        </Grid>

      </Grid>
    </div>
    </>



  )

   
  


}


export default TechInformation