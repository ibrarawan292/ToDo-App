


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
                               <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
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