import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './compoents/Login';
import Signup from './compoents/signup.js';
import Dashbord from './compoents/DashBoard';
import Update from './compoents/update';
import Forgot from './compoents/forgot';
function App(){
  return (
    <div>
       <BrowserRouter>
     <Routes>
    
     <Route path='/loginpage'element={<Login/>}></Route>
     <Route path='/signupage'element={<Signup/>}></Route>
     <Route path='/dashboard'element={<Dashbord/>}></Route>
     <Route path='/update'element={<Update/>}></Route>
     <Route path='/forgot'element={<Forgot/>}></Route>
     </Routes>
     </BrowserRouter>
      

    </div>
  );
}

export default App;
