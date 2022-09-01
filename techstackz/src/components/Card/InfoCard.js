import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


 var cardStyle = {
    height: '10em'
}

export default function InfoCard({ InfoName,tagInfo })
{
  let section;
  if (tagInfo.length>0)
  {
    section =<Typography variant="body2">{tagInfo}</Typography>  
  }
  else{
    section =<Typography variant="body2">... No Relevent Resource In Our Database ... </Typography>  
  }


    return(
        <>
        <Card style = {cardStyle} sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          <i className="fa-solid fa-circle-info"></i>
          {InfoName}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        {section}
      </CardContent>
    </Card>
        </>

        
    )
}