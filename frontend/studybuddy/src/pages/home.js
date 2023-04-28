import React from "react";
import Link from 'next/link';
let fileList = {"hi" : "17", "file2" : "19"};
async function getText(){
    const Url = "http://172.18.179.14:8000"
    const response = await fetch(Url);
    const jsonData = await response.json();
    console.log(jsonData);
}
export default function HomePage(){
    return (
    <React.Fragment>Welcome StaticMemory!
        <Link href="/notePackages/CreateNewNote">Create a New Note Package!</Link>
        <button onClick={getText}>Here is button!</button>
        <ul>Which file would you like to view?
            {Object.keys(fileList).map(key =>(
              <a>
                {key}
              </a>  
            ))}
        </ul>

    </React.Fragment> )
}