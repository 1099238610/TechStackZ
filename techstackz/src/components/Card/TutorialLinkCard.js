import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./TopQuestionCard.css";

 var cardStyle = {
    height: '15em'
}
export default function TutorialLinkCard({cardName,arr})
{
    return(
        <>
        <Card style = {cardStyle} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          <i className="fa-solid fa-link"></i>
          {cardName}
        </Typography>
          {
          arr.map((item,index)=>{
            return <a style={{backgroundcolour:"red"}} href = {item}><div>{index+1}. {item}</div></a>
          })
          }
          <br />

        
      </CardContent>
    </Card>
        </>

        
    )
}