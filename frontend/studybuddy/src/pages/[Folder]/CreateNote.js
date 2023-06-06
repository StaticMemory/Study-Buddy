import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function CreateNote(props){
    const [fileTitle, updateFileTitle] = useState('');
    const [fileData,updateFileData] = useState('');
    const [sendData, updateSendData] = useState(false);
    const router = useRouter();
    
    const makeFile = async () =>{
        if(fileTitle != '' && fileData != ''){
            let data = await fetch('http://localhost:8000/storeNotes',{method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({
                'title': fileTitle,
                'data': fileData,
                'folder': router.query.Folder
            })});
            await router.push(`/${encodeURIComponent(router.query.Folder)}/${encodeURIComponent(fileTitle)}`)
        }
            
    }
    return <React.Fragment>
        <form className="justify-center flex" onChange={(e) => {updateFileTitle(e.target.value)
        }}><input className="text-center border-black border-4" type="text" maxLength="20" size="width:20em" value={fileTitle} placeholder="title"></input></form>
        <br></br>
        <form className="justify-center flex" onChange={(e)=>{updateFileData(e.target.value)}}><textarea className="resize-none border-black border-2" rows="25" cols="100"></textarea></form>
        <button onClick={() => {makeFile()}}>SUBMIT</button>
    </React.Fragment>
}