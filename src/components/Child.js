import React from "react";


const Child = ({showModal,setShowModal})=>{
    return (<>
    <h2>Child Component</h2>
    <button onClick={()=>{if(showModal){setShowModal(false)}else{setShowModal(true)}}}>Show Modal</button>
    {showModal && <div><h3>Modal Content</h3><p>This is the Modal content.</p></div>}
    </>)
}

export default Child;