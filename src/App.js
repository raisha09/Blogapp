import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Dash from './components/Dash';
function App() {
  return (
    <div className="App">
      
        
       
       <Navbar/>
         {/* <Blog/>  *
       <Dash/>      */}
        
       <Routes>
     <Route path="/Add" element={<Blog/>}/>
      <Route path="/dash" element={<Dash/>}/> 
      
      
      </Routes> 
        
      
    </div>
  );
}

export default App;
