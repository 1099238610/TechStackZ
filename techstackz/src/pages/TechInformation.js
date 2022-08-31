import React, {StrictMode,useState, useEffect} from "react";
import '../App.css'
import {useParams} from "react-router-dom";
import axios from "axios";
import InfoCard from "../components/Card/InfoCard";
import TopQuestionCard from "../components/Card/TopQuestionCard";
import { Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import TutorialLinkCard from "../components/Card/TutorialLinkCard";
import GoogleTrend from "../components/Card/GoogleTrend";

function TechInformation(props) {


  const [techInfo, setTechInfo] = useState('')
  const [synonyms, setSynonyms] = useState('')
  const [topTenQuestion, setTopTenQuestion] = useState([])
  const [tutorialLink,setTutorialLink] = useState([])
  const {tagName} = useParams()
  const [relationship,setRelationship] =useState([])


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
      setTechInfo(result.data.data.excerpt);
      let synonyms = ""
      for (let i = 0; i < result.data.data.synonyms.length; i++) {
        synonyms += result.data.data.synonyms[i] + "\n";
      }

      setSynonyms(synonyms);

      let topQuestions = []

      for (let i = 0; i < result.data.data.topTenQuestion.length; i++) {
        topQuestions.push(result.data.data.topTenQuestion[i]);
      }
      setTopTenQuestion(topQuestions)


      let links = [];
      let linkFromdb = result.data.data.tutorialLink;
      for (let i = 0; i < linkFromdb.length; i++) {
        links.push(linkFromdb[i]);
      }
      setTutorialLink(links);

      

    });
    
    
    
  },[]);



  return(
    
     <>
     
     <ScrollToTop>
     </ScrollToTop>
 
      <div>
        <br></br>
      <h1>{tagName.toUpperCase()}</h1>
    
      <div className="test" style={{margin:"1.5em"}}>
        <Grid container spacing={2} marginTop = "2.1em" marginBottom="2.1em" >
        <Grid item xs={8} p={3}>
            <InfoCard InfoName = {"Introduction"} tagInfo = {techInfo}/>
        </Grid>
        <Grid item xs={4} >
            <InfoCard InfoName = {"Synonyms"} tagInfo = {synonyms}/>
        </Grid>
        <Grid item xs={6}>
          <TopQuestionCard cardName = {"Top Questions From Stackoverflow"} arr = {topTenQuestion}/>
        </Grid>
        <Grid item xs={6}>
          <TutorialLinkCard cardName= {"Useful Tutorial Links"} arr = {tutorialLink}/>
            
        </Grid>
        <Grid item xs={12} >
          <div id="widget">
        <GoogleTrend
          type="TIMESERIES"
          keyword={tagName}
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
        <GoogleTrend
          type="GEO_MAP"
          keyword={tagName}
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
          </div>
           
        </Grid>
       

      </Grid>
      </div>
    </div>
 

    
    </>



  )

   
  


}


export default TechInformation



