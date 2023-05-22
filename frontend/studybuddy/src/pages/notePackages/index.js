import { useRouter } from "next/router"
export const getServerSideProps = async () =>{

}
export default function FolderOptions(props){
    const router = useRouter();
    return <div><button onClick={() => {router.push(encodeURIComponent(`/notePackages/${props.name}`))}}>Click Here</button></div>
}