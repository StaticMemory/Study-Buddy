import React, { useEffect, useState } from "react";

export default function FrameFile(props){
    const [data, updateData] = useState('');
    const [apiData, updateAPI] = useState('');
    useEffect(()=>{
        const sendData = async () => {
            const Url = "http://localhost:8000/storeNotes/";
            let responseObj = await fetch(Url, {method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                'title': props['title'],
                'data': apiData,
                'folder': props['folder']
            })})
            updateData('');
    
        }
        if(apiData !== props['data']) {
            sendData()
        };
        
    },[apiData]);

    const handleSubmission = (e) =>{
        e.preventDefault();
        updateAPI(data);
        updateData('');
    }
    return <React.Fragment><form onSubmit={handleSubmission}><input value={data} onChange={e => updateData(e.target.value)}></input></form></React.Fragment>
}