import { Link } from "react-router-dom";


const ToDoList = (props) => {
  
    const listelements = props.listItems

    return (
        <div>
            
            <div className="container">
            {
                listelements.map((todo)=>{
                    return(
                        <div className="my-todo-list">
                           <div className="tod-list-inner">
                               <div className="left-col">
                               <Link to= {`/detail/${todo.title}`}><h1>{todo.title}</h1></Link>
                               <span className={`badge bg-${todo.status === 'completed' ? 'success' : 'danger'}`}>{todo.status}</span>
                               </div>
                               <div className="right-col">
                                   <button className="btn btn-primary">Delete</button>
                               </div>
                           </div>

                        </div>
                    )
                })

            }
               
            </div>
        </div>
    );
}
 
export default ToDoList;