import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashbord() {


  const [data, setUserData] = useState("");
  const navigate=useNavigate();



  const logout=()=>{
    localStorage.clear();
    navigate('/loginPage')
  }
  const updates=()=>{
    
    navigate('/update')
  }


  return (
    
        <div class="container">
          <div class="table">
            <div className="d-flex" style={{justifyContent:"end"}}>
            <button type="button" class="btn btn-danger"  onClick={()=>{logout()}}>logout</button>
            <button type="button" class="btn btn-danger"  onClick={()=>{updates()}}>upadate</button>
            </div>
     
            
          </div>
        </div>
    
  );
}

export default Dashbord;
