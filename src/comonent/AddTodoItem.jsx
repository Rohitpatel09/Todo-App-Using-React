import { MdDelete } from "react-icons/md";
function AddTodoItem({itemname,itemdate,handleDeleteItem}){

    return <div className="row kg-row">
    <div className="col-5">{itemname}</div>
    <div className="col-5">{itemdate}</div>
    <div className="col-2"><button className="btn btn-danger kg-button" onClick={()=>handleDeleteItem(itemname)}>
        <MdDelete />
        </button>
    </div>
  
   </div>
    
}
export default AddTodoItem;
