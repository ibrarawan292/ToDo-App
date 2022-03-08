import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import TopStrip from './components/Topstrip';

function App() {

 



  return (
    <div className="App">

    <Router>
    <div className='container'>
           <Navbar/>
           <TopStrip/>
           </div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>



    

       
      {/* <Posts/> */}
    </div>
  );
}

export default App;
