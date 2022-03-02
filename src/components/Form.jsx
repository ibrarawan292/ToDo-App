import { useState } from "react";
import ToDoList from "./TodoList";
import TopStrip from "./Topstrip";


const FormData = (props) => {
    
    const listelements = props.listItems
    const title = props.handleTitle
    const description = props.handleDescrtiption
    const submitform = props.handleSubmit
  


    return (


        <div className="todo-input">
             
            <div className="container">
                <div className="todo-input-inner">
               
                    <form  onSubmit={(event)=>submitform(event)}>
                        <label className="form-label">ToDo Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ToDo Title" onChange={(event)=>title(event)}/>
                        <label className="form-label">ToDo Description</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Description" onChange={(event)=>description(event)}/>
                       <button type="submit" className="form-control bnt btn-primary p-3 mt-3">SAVE ToDo</button>
                    </form>
                    
                </div>
            </div>
        
        </div>
    );
}
 
export default FormData;





