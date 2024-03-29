import React from "react";
import NoteDisplay from "@/components/NoteDisplay";
export default function DisplayFile(props){
    let fileData = props['jsonData'][0];
    return <React.Fragment>
        <NoteDisplay title={fileData['Title']} data={fileData['Data']} folder={fileData['Folder']}></NoteDisplay>
    </React.Fragment>
}
export const getServerSideProps = async (context) =>{
    console.log(context.query.File);
    const URL = "http://localhost:8000/retrieveNote";
    const response = await fetch(URL, {method:'GET',
headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'File': context.query.File,
    'Folder': context.query.Folder
}});
    const jsonData = await response.json();
    return {props : {jsonData}};
}