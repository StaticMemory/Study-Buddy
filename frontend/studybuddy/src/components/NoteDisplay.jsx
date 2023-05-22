import { useState } from 'react';
import React from 'react';
//Assumes note data passed through props :DDD
export default function NoteDisplay(props){
    const delNote = () =>{
        fetch("http://172.18.179.14:8000/deleteNote",{method:'DELETE',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'File': props.title,
        'Folder': props.folder
    }})
    }
    return <React.Fragment><div>{props.title}</div>
    <br></br>
    <div>{props.data}</div>
    <button onClick={delNote}>DELETE THIS NOTE</button>
    </React.Fragment>
}