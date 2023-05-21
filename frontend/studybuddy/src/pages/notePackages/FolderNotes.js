import React from "react"

export default function FolderNotes(props){
    console.log(props['jsonData']);
    return <React.Fragment></React.Fragment>
}
export const getServerSideProps = async (context) => {
    const jsonData = {'1' : '2'};
    return {props : {jsonData}};
}