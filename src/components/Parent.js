import React,{useState} from "react";
import Child from "./Child"


const Parent = ()=>{
    let [showModal,setShowModal]=useState(false);
    return (<>
    <h1>Parent Component</h1>
    <Child showModal={showModal} setShowModal={setShowModal}/>
    </>)
}

export default Parent;