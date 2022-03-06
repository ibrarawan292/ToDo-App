import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbar from './components/Navbar';

function App() {

 



  return (
    <div className="App">

    <Router>
    <div className='container'>
           <Navbar/>
           </div>
      <Routes> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>



    

       
      {/* <Posts/> */}
    </div>
  );
}

export default App;
