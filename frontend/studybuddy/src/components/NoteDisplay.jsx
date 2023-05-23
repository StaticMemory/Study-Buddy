import { useRouter } from 'next/router';
import React, { useState } from 'react';
//Assumes note data passed through props :DDD
export default function NoteDisplay(props){
    const [editing, updateEdit] = useState(false);
    const delNote = () =>{
        fetch("http://172.18.179.14:8000/deleteNote",{method:'DELETE',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'File': props.title,
        'Folder': props.folder
    }})
    const router = useRouter();
    router.push('/home');
    }
    return (<React.Fragment><div className='text-blue-600 justify-center flex font-bold italic text-lg'>{props.title}</div>
    <br></br>
    <div className='justify-center flex box-border border-4 w-256 m-auto h-128 bg-orange-400 overflow-y-auto'>{props.data}</div>
    <br></br>
    <button onClick={delNote}>DELETE THIS NOTE</button>
    <div className='justify-center flex' onClick = {() => updateEdit(!editing)}>Edit Note</div>
    </React.Fragment>)
}