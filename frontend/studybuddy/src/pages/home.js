import React, { useEffect, useState } from "react";
import Link from 'next/link';
import FolderFile from "@/components/FolderFile";
import NewFolder from "@/components/NewFolder";
import { render } from "react-dom";


export const getStaticProps = async () =>{
  const data = await fetch("http://localhost:8000/returnUniqueFolders", {method:"GET", 
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }});
  const jsonData = await data.json();
  return {props : {jsonData}};
}
export default function HomePage({jsonData}){
    const [newFolderBox, addNewFolderBox] = useState([]);
    return <React.Fragment>
  
      <header className="justify-center flex font-bold bg-teal-400">Welcome StaticMemory!</header>
      <br></br>
      <div className="w-256 h-128 overflow-y-auto">
      <div className="text-center border-2 border-black"><b>Your Note Packages</b></div>
      {jsonData.map((x) => (
      <FolderFile key={(x['FolderName'])} folder={x['FolderName']}></FolderFile>
      ))}
      
      {newFolderBox.map((x)=>(
        <div key={x}className='w-64 bg-gray-300 border-4 inline-block h-64 float-left overflow-x-auto text-center border-black relative'><NewFolder></NewFolder></div>
      ))}
      <div onClick={() => {addNewFolderBox([...newFolderBox, `Folder ${newFolderBox.length}`])}} className='rounded-lg overflow-hidden w-64 cursor-pointer bg-gray-300 border-4 inline-block h-64 float-left overflow-y-auto overflow-x-auto text-center border-black'>
        Create New Folder!
      </div>
      </div>
    </React.Fragment>
}