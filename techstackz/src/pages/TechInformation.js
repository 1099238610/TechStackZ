import React, {useState, useEffect} from "react";
import '../App.css'
import '../components/Card/Cards.css'
import {useParams} from "react-router-dom";
import axios from "axios";
import InfoCard from "../components/Card/InfoCard";
import TopQuestionCard from "../components/Card/TopQuestionCard";
import {Grid} from "@mui/material";
import TutorialLinkCard from "../components/Card/TutorialLinkCard";
import GoogleTrend from "../components/Card/GoogleTrend";
import RelationshipCard from "../components/Card/RelationshipCard";

function TechInformation() {
  const [techInfo, setTechInfo] = useState('')
  const [synonyms, setSynonyms] = useState('')
  const [topTenQuestion, setTopTenQuestion] = useState([])
  const [tutorialLink, setTutorialLink] = useState([])
  const {tagName} = useParams()
  const [tagNameAfter, setTagNameAfter] = useState('')
  const [relationship, setRelationship] = useState([]);


  useEffect(() => {
    window.scroll(0,0)

    axios({
      method: 'post', //you can set what request you want to be
      url: 'http://3.26.190.60:8888/info/all', data: {"tagName": tagName}, headers: {
        "Content-Type": "application/json"
      }
    }).then(result => {
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
      setTopTenQuestion(topQuestions);

      let links = [];
      let linksFromDataBase = result.data.data.tutorialLink;
      for (let i = 0; i < linksFromDataBase.length; i++) {
        links.push(linksFromDataBase[i]);
      }
      setTutorialLink(links);

      let tagNameAfter = tagName[0].toUpperCase() + tagName.slice(1);
      setTagNameAfter(tagNameAfter);

    });

    axios({
      method: 'get', //you can set what request you want to be
      url: `https://api.stackexchange.com/2.3/tags/${encodeURI(tagName)}/related?site=stackoverflow&filter=!T.BkwD0sk(EEa)0xwf`, 
      headers: {
        "Content-Type": "application/json",
        "key":"QdZTIOrKI7)zdPBT*0iyag(("
      }
    }).then(result =>{
      let temarr = [];
      for(let i =0;i<result.data.items.length;i++)
      {
        temarr.push(result.data.items[i].name)
      }
      setRelationship(temarr);

    });

    
    }, []);

    console.log(relationship);


  return (
    <>
      <div style={{background: "url('/images/galaxy.jpeg') center center/cover no-repeat"}}>
      <div className="cards__container">
        <br/><br/>
        <h1 style={{color:"white", fontSize: "80px", fontFamily: "Arial, sans-serif"}}>{tagNameAfter}</h1>
        <Grid container spacing={2} marginTop="2.1em" marginBottom="2.1em">
          <Grid item xs={8} p={3}>
            <InfoCard InfoName={" Introduction"} tagInfo={techInfo}/>
          </Grid>
          <Grid item xs={4}>
            <InfoCard InfoName={" Synonyms"} tagInfo={synonyms}/>
          </Grid>
          <Grid item xs={6}>
            <TopQuestionCard cardName={" Top Questions From Stackoverflow"} arr={topTenQuestion}/>
          </Grid>
          <Grid item xs={6}>
            <TutorialLinkCard cardName={" Useful Tutorial Links"} arr={tutorialLink}/>
          </Grid>
          <Grid item xs={6}>
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
           <Grid item xs={6}>
            <div id="widget">
            <RelationshipCard arr = {relationship}/>
            </div>
          </Grid>
        </Grid>
      </div>
      </div>
    </>
  )
}


export default TechInformation



