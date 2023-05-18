import { useState } from 'react';
import React from 'react';
export default function NoteDisplay(props){
    const noteTitle = props.name;
    const [title, setTitle] = useState(0);
    const [data, setData] = useState(0);
    // Takes in requested title of note, assume it exists, probably pass it in via props
    async function getNoteData(){
        const Url = "http://172.18.179.14:8000/retrieveNotes/"
        const response = await fetch(Url, {method : 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'title' : noteTitle}});
        let data = await (response).json();
        setTitle(data['title']);
        setData(data['data']);
    }

    return <React.Fragment><div onClick={getNoteData} className="hover:bg-blue-700">View Current Notes</div></React.Fragment>
}