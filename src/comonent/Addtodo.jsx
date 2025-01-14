import { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
function AddTodo({handleNewItem}){
const [todoName,setName]=useState("");
const [todoDate,setDate]=useState("");

let handleNameChange=(event)=>{
  setName(event.target.value);
}
let handleDateChange=(event)=>{
  setDate(event.target.value);
}

let handleAddButton=()=>{
 handleNewItem(todoName,todoDate);
 setName("");
 setDate("");
}





    return <div className="row kg-row">
    <div className="col-5">
    <input type="text" value={todoName} placeholder="Enter Todo Here" onChange={(event)=>handleNameChange(event)} />
    </div>

    <div className="col-5">
      <input type="date" value={todoDate} onChange={(event)=>handleDateChange(event)}/>
    </div>

    <div className="col-2">
      <button className="btn btn-success kg-button" onClick={handleAddButton}><BiSolidAddToQueue /></button>
    </div>

  </div>
}
export default AddTodo;