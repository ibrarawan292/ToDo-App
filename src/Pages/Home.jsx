
import Posts from '../components/Posts';
import TopStrip from '../components/Topstrip';
import { useState } from "react";
import Form from '../components/Form';
import ToDoList from '../components/TodoList';
import {todos} from '../data/todos'

const Home = () => {

    const [todoTitle, setToDoTitle] = useState ('')
    const [todoDescription, setToDescrtiption] = useState('')
  
   
  
    const handleTitle = (e)=>{
        setToDoTitle(e.target.value);
        
    }
  
    const handleDescrtiption = (e)=>{
        setToDescrtiption(e.target.value);
    }
  
    const [listItems, setListItems] = useState(todos)
   
  
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newItem = {
            title: todoTitle,
            description: todoDescription
        }
     
        setListItems([...listItems, newItem])
  
  
    }



    return (

        <div>
          
             <div>
                <TopStrip listItems={listItems}/>
        </div>
        <Form 
        handleTitle={handleTitle}
        handleDescrtiption={handleDescrtiption}
        handleSubmit={handleSubmit}
        />

      <ToDoList listItems={listItems}/>
            
        </div>
    );
}
 
export default Home;