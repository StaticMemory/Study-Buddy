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
    <div href='/notePackages'>Your Note Packages</div>
      {jsonData.map((x) => (
      <div className='bg-green-300 w-fit inline-block h-64 float-left overflow-y-auto overflow-x-auto pr-4'><FolderFile key={(x['FOLDER'])} folder={x['FOLDER']}>{x['FOLDER']}</FolderFile><br></br></div>

      ))}
    </React.Fragment>
}