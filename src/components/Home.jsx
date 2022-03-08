import { useState } from "react";



const Home = () => {

    const [title, setTitle] = useState('');
    const [desc, setDescription] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const [todo, setTodo] = useState([

        {
           
            title: "This is a new task",
            desc: "This is some description",
          
        },
        {
           
            title: "This is a new task",
            desc: "This is some description",
          
        },

    ])

    const addTask = () => {
        const newtask = {
            title: title,
            desc: desc,
        }
        setTodo([...todo, newtask])
    }


    // const listelements = props.listItems
    // const title = props.handleTitle
    // const description = props.handleDescrtiption
    // const submitform = props.handleSubmit



    return (

        <div className="container mt-5 " style={{}}>
            <form className="w-50" onSubmit={(event) => handleSubmit(event)}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(event) => handleTitle(event)} className="form-control" id="title" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(event) => handleDescription(event)} className="form-control" id="description" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={addTask}>Save</button>
            </form>
            {
                todo.map(todo => {
                    return (
                        <div className="my-todo-list">
                           <div className="tod-list-inner">
                               <div className="left-col">
                               <h1>{todo.title}</h1>
                                <p>{todo.desc}</p>
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



        // <div classNameName="todo-input">

        //     <div classNameName="container">
        //         <div classNameName="todo-input-inner">

        //             <form  onSubmit={(event)=>submitform(event)}>
        //                 <label classNameName="form-label">ToDo Title</label>
        //                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ToDo Title" onChange={(event)=>title(event)}/>
        //                 <label classNameName="form-label">ToDo Description</label>
        //                 <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Description" onChange={(event)=>description(event)}/>
        //                <button type="submit" classNameName="form-control bnt btn-primary p-3 mt-3">SAVE ToDo</button>
        //             </form>

        //         </div>
        //     </div>

        // </div>
    );
}

export default Home;





