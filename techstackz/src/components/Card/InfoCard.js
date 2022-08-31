import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


 var cardStyle = {
    height: '10em'
}

export default function InfoCard({ InfoName,tagInfo })
{


    return(
        <>
        <Card style = {cardStyle} sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {InfoName}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2">
          {
            tagInfo
          }
          
        </Typography>
      </CardContent>
    </Card>
        </>

        
    )
}