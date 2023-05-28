import React, { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/router";
//ALL Files within a folder.

//TODO: Make + graphic instead of placeholder add file text
function AddFile({ doRender, folder}){
    const router = useRouter();
    if(doRender){
        return <div><br></br><div onClick={()=>{router.push(`/${encodeURIComponent(folder)}/CreateNote`)}}className="cursor-pointer pl-1 pr-1 w-fit border-2 border-black inline-block">Add File!</div></div>
    }
    return <></>
}
function ShowDel({ doRender, folder}){
    const [del, setDel] = useState(false);
    useEffect(()=>{
        const delFolder = async () =>{
            const data = await fetch("http://172.18.179.14:8000/deleteFolder", {method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'folder': folder
            }});
            window.location.reload(true);
        }
        if(del) delFolder();
    }, [del]);
    
    if(doRender){
        return <div onClick={() => setDel(true)} className="bg-red-800 absolute w-8 bottom-0 right-0 cursor-pointer">x</div>
    }
    return <></>
}

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
    return<div 
    ><b ><button className="bg-green-300 border-2 pb-1 border-black" onClick={() => updateRenderFiles(!renderFiles)}>{props.folder}</button></b>
    {files.map((x)=> {
         if(renderFiles) return (<div className="text-center"><div className='cursor-pointer pl-1 pr-1 w-fit border-2 border-black inline-block' 
         onClick={() => {router.push(`/${encodeURIComponent(x['Folder'])}/${encodeURIComponent(x['Title'])}`)}} key={x['Title'].toString()}>{x['Title']}</div></div>);
    })}
    <AddFile doRender={renderFiles} folder={props.folder}></AddFile><ShowDel doRender={props.isHover} folder={props.folder}></ShowDel>
    
    </div>
}