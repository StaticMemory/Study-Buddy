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
    <Link href='/notePackages'>Your folders</Link>
      {jsonData.map((x) => (
      <FolderFile key={(x['FOLDER'])} folder={x['FOLDER']}>{x['FOLDER']}</FolderFile>
      ))}
    </React.Fragment>
}