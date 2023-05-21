import React, { useEffect } from "react";
import Link from 'next/link';
import FrameFile from "@/components/newNote";
import FolderFile from "@/components/FolderFile";

export const getStaticProps = async () =>{
  const data = await fetch("http://172.18.179.14:8000/returnFolderFiles", {method:"GET", 
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Folder' : 'Second Folder'
  }});
  const jsonData = await data.json();
  return {props : {jsonData}};
}
export default function HomePage({jsonData}){
    return (
    <React.Fragment>Welcome StaticMemory!
        <Link href="/notePackages/CreateNewNote">Create a New Note Package!</Link>
        <FrameFile title='Testing Title' folder='Second Folder' data=''></FrameFile>
        {jsonData.map((file) =>(
          <li key={file['Title']}>{file['Title']}</li>
        ))}
    </React.Fragment> )
}