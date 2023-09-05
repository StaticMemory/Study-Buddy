import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";
import RenderBarButton from "@/components/RenderBarButton";
import UpDownArrowBar from "@/components/UpDownArrowBar";


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
    const [colourState, setColourState] = useState("");
    const [renderBar, setRenderBar] = useState(false)
    const showBar = () =>{
      setRenderBar(!renderBar)
      if(renderBar){
        setColourState("white")
      }
      else{
        setColourState("gray-300")
      }
    }
    return <div className={"bg-" + colourState + " h-screen w-screen duration-700"}>
      <SideBar className="overflow-y-hidden" hide={renderBar} func={showBar} folder={jsonData}/>
      <div className="bg-gray-500 py-1 border border-black">
        
        <div className="flex justify-between">
          <RenderBarButton func={showBar}/>
          <div className="justify-center flex font-bold bg-teal-400 px-2 py-1">Welcome StaticMemory!</div>
          <div></div>
        </div>
        <div></div>
      </div>
      <UpDownArrowBar/>
      </div>
}