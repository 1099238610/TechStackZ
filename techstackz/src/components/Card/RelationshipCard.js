import React ,{ useCallback,useState}from "react";
import Card from '@mui/material/Card';

import "./TopQuestionCard.css";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import {useParams} from "react-router-dom";
import axios from "axios";
 var cardStyle = {
    height: '59em'
}



export default function RelationshipCard({cardName,arr})
{
    
    let initialNodes = [];

    for (let i =0;i<arr.length;i++)
    {
    initialNodes.push(
        {
        id:(i+1).toString(),
        data:{label:arr[i]},
        position:{
            x:10+i*50,
            y:10+i*200},
        hidden:false,
        draggable:true
        }
    )
    }

    let initialEdges =[];
    for (let i=1;i<initialNodes.length;i++){
    initialEdges.push(
        {
        source:initialNodes[0].id.toString(),
        target:initialNodes[i].id.toString()
        } 
    );
    }

    console.log(initialNodes)
    console.log(initialEdges)
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    console.log(nodes)
        
   
    return(
        <>
       
        <Card style = {cardStyle} sx={{ minWidth: 275 }}>
    
        <div  style={{width:'550px',height:'1000px'}}>
            <ReactFlow nodes={initialNodes} edges={initialEdges} onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange} fitView onlyRenderVisibleElements/>
        </div>
    
    </Card>
        </>

        
    )
}