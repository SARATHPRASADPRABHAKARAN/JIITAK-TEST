import React from 'react'
import './signup.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Update() {

  const navigate=useNavigate();


  function dosignup (e){

    e.preventDefault();
     
   let signupData={
      
     username:document.getElementById('fullName').value ,
     email:document.getElementById('email').value ,
     password:document.getElementById('password').value
  
  }

  var data = localStorage.getItem('loggedinUser');
  console.log(data);
  let parsedData = JSON.parse(data);
  
  var id  = parsedData.id;

  console.log(id);
  var config = {
    method: 'put',
    url: `http://localhost:3001/users/${id}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : signupData
  };
  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  navigate('/dashboard')
})
.catch(function (error) {
  console.log(error);
});
  
  }

  
  return (
    <div>
    <div class="log-form">
      
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
  
  <div className="wrapper fadeInDown">
  <div><h2>Edit Profile</h2></div>
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
     
      {/* Login Form */}
      <form onSubmit={(e) => dosignup(e)} >
        <input
          type="text"
          id="fullName"
          className="fadeIn second"
          name="fullName"
          placeholder="name"
         required
        />

        <input
          type="email"
          id="email"
          className="fadeIn third"
          name="Email"
          placeholder="Email"
          required
        />
        
        <input
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
          required
        />





        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        
      </div>
    </div>
  </div>
</div>


    </div>

  )
}






export default 
Update