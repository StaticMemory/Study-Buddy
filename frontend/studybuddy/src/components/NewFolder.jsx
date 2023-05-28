import React, { useEffect } from "react";
import { useState } from "react";
import FolderFile from "./FolderFile";

export default function NewFolder(){
    const [FolderName, updateFolderName] = useState('');
    const [isCreated, setIsCreated] = useState(false);
    useEffect(()=>{
        const createFolder = async (event) =>{
            await fetch("http://172.18.179.14:8000/addEmptyFolder", {method:"POST", 
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body:JSON.stringify({'folder': FolderName})
        });
            console.log(FolderName);
        }
        if(isCreated){
            createFolder();
        }
    }, [isCreated]);
    
    if(!isCreated){return <React.Fragment>
        <form onSubmit={(e)=>{e.preventDefault();
            setIsCreated(true)}}>
        <input onChange={(e)=>{updateFolderName(e.target.value)}}placeholder="New Folder Name"className="bg-green-300"></input>
        </form>
    </React.Fragment>
    }
    else{
        return <FolderFile folder={FolderName}></FolderFile>
    }
}