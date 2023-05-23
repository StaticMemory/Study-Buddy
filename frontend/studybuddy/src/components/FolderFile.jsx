import React, { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/router";
//ALL Files within a folder.
export default function FolderFile(props){
    const [renderFiles, updateRenderFiles] = useState(false);
    const [files, setFiles] = useState([]);
    const router = useRouter();
    useEffect(()=>{
        const getFiles = async () =>{
            const data = await fetch("http://172.18.179.14:8000/returnFolderFiles", {method:"GET",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'folder': props.folder
            }});
            const newFiles = await data.json();
            setFiles(newFiles);
        }
        getFiles();
    }, []);
    return( <React.Fragment><button onClick={() => updateRenderFiles(!renderFiles)}>{props.folder}</button>
    {files.map((x)=> {
         if(renderFiles) return (<div className='bg-red-300 w-32' onClick={() => {router.push(`/${encodeURIComponent(x['Folder'])}/${encodeURIComponent(x['Title'])}`)}} key={x['Title'].toString()}>{x['Title']}</div>)
    })}
    </React.Fragment>)
}