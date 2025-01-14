import AddTodoItem from "./AddTodoItem";

const AddContainer=({itemdetails,handleDeleteItem})=>{
    return <div className="items-container">
        {itemdetails.map(item=><AddTodoItem itemname={item.name} itemdate={item.date} handleDeleteItem={handleDeleteItem}></AddTodoItem>)}
    

    </div>
}

export default AddContainer;