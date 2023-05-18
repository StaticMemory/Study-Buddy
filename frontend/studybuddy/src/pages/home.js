import React, { useEffect } from "react";
import Link from 'next/link';
import FrameFile from "@/components/newNote";


export default function HomePage(){
 
    return (
    <React.Fragment>Welcome StaticMemory!
        <Link href="/notePackages/CreateNewNote">Create a New Note Package!</Link>
        <FrameFile title='Test Title' folder='Test Folder' data=''></FrameFile>
        <FrameFile title="Second Test" folder ='Second Folder' data=''></FrameFile>
        <ul></ul>

    </React.Fragment> )
}