import { useState } from 'react';
import React from 'react';
//Assumes note data passed through props :DDD
export default function NoteDisplay(props){
    
    return <React.Fragment><div>{props.title}</div>
    <br></br>
    <div>{props.data}</div>
    </React.Fragment>
}