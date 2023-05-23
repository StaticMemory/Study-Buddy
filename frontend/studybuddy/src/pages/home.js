import React, { useEffect } from "react";
import Link from 'next/link';
import FolderFile from "@/components/FolderFile";

export const getStaticProps = async () =>{
  const data = await fetch("http://172.18.179.14:8000/returnUniqueFolders", {method:"GET", 
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }});
  const jsonData = await data.json();
  return {props : {jsonData}};
}
export default function HomePage({jsonData}){
    return <React.Fragment>
      <header className="justify-center flex font-bold bg-teal-400">Welcome StaticMemory!</header>
      <div className="text-center border-2 border-black"><b>Your Note Packages</b></div>
      {jsonData.map((x) => (
      <div className='w-64 border-4 inline-block h-64 float-left overflow-y-auto overflow-x-auto text-center'><FolderFile key={(x['FOLDER'])} folder={x['FOLDER']}>{x['FOLDER']}</FolderFile></div>
      ))}
      <div className='w-64 border-4 inline-block h-64 float-left overflow-y-auto overflow-x-auto text-center'>+</div>
    </React.Fragment>
}