import { useState } from "react";
import ToDoList from "./TodoList";
import TopStrip from "./Topstrip";


const Form = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitle = (e) => {
      setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
      }
      const handleSubmit = (e) => {
          e.preventDefault();
          
      }

      

      const [persons, setPersons] = useState([
          
        {
            name: 'yasir',
            age: 32
        },
        {
            name: 'ahmed',
            age: 24
        },
        {
          name: 'obaid',
          age: 44
      }
      ]) 
    
     const addNewPersons = () => {
          const per = {
              name: 'faraz',
              age: 18
          }
          setPersons([...persons, per])
     }


    // const listelements = props.listItems
    // const title = props.handleTitle
    // const description = props.handleDescrtiption
    // const submitform = props.handleSubmit



    return (

        <div className="container">
            <form className="w-50" onSubmit={(event) => handleSubmit(event)}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" onChange= {(event) => handleTitle(event)} className="form-control" id="title" />
                </div>
                <span>{title}</span>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input type="text" onChange= {(event) => handleDescription(event)} className="form-control" id="description" />
                </div>
                <span>{description}</span>
            </div>
            <button type="submit" className="btn btn-primary w-100">Save</button>
        </form>
        {
            persons.map(persons =>{
                return (
                    <>
                    <p>{persons.name}</p>
                    <p>{persons.age}</p>
                    </>
                )
            })
        }
        <button onClick={addNewPersons}>Add</button>
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

export default Form;





