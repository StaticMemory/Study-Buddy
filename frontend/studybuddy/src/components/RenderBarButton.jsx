export default function RenderBarButton(props){
    return <div ><button onClick={()=>{props.func()}} className="bg-black w-8 h-8 rounded-3xl"></button></div>
}