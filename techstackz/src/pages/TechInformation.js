import React, {useState, useEffect} from "react";
import '../App.css'
import {useParams} from "react-router-dom";
import axios from "axios";

function TechInformation(props) {
  const [techInfo, setTechInfo] = useState('')
  const [synonyms, setSynonyms] = useState('')
  const [topTenQuestion, setTopTenQuestion] = useState('')
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

    });
    console.log(techInfo);
  },[1]);


}


export default TechInformation