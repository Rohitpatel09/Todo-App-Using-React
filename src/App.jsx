import "./App.css";

import AddName from "./comonent/Addname";
import AddTodo from "./comonent/Addtodo";
import "./App.css";
import AddContainer from "./comonent/AddContainer";
import { useState } from "react";
import WelcomeMessage from "./comonent/WelcomeMessage";



function App() {

    let [list,setlist]=useState([] )

   let handleNewItem=(ItemName,dueDate)=>{
    const newitem=[...list,{name:ItemName,
        date:dueDate}];

    setlist(newitem);
   
   } 

   const handleDeleteItem=(ItemName)=>{
    let newitem=list.filter(item=>item.name!=ItemName);
    setlist(newitem);
   }








 return( <center className="todo-container">
<AddName className="todoheading"></AddName>

<AddTodo handleNewItem={handleNewItem}></AddTodo>

{list.length===0 &&<WelcomeMessage></WelcomeMessage>}

<AddContainer itemdetails={list} handleDeleteItem={handleDeleteItem}></AddContainer>
 </center>
 );








}

export default App
