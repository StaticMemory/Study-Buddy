import { useEffect, useState } from "react"
import FolderDropDown from "./FolderDropDown";

export default function SideBar(props){
    const [folders, setFolders] = useState(props.folder); 
    useEffect(()=>{

    },[])
    if(props.hide){
    return <div className="duration-1000 absolute bg-gray-600 w-64 border-black border-2 h-full overflow-y-scroll ">
        <div className="duration-1000 ">
            <button onClick={()=>{props.func()}}>here</button>
        </div>
        <div className="text-xl text-center p-1">Your Folders</div>
        <div className="">
        {folders.map((folder,id) =>{
            return <div className="text-center py-1  border-y-2 border-gray-700" key={id}>
                <div className="flex justify-between">
                    <div></div>
                    <div className="w-32"><b>{folder.FolderName}</b></div>
                    <FolderDropDown/>
                </div>
            </div>
            
        })}
        </div>
    </div>
    }
}