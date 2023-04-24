import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function logins(e) {
    e.preventDefault();
    let request = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    console.log(request)
    axios
      .post("http://localhost:3001/users/login",
      request)
      .then((resp) => {
        console.log("response",resp)
        localStorage.setItem('loggedinUser',JSON.stringify(resp.data));
   
        // alert(resp.data.message);
  
         navigate("/dashboard");
      
      })
      .catch((err) => {
        console.log(err)
        
       alert("ERROR");
      });
  }
  



  return (
    <div class="log-form">
      <>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
 
  <div className="wrapper fadeInDown">
  <div> <h2>Login</h2></div>
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
     
      {/* Login Form */}
      <form onSubmit={(e) => logins(e)}>
        <input
          type="text"
          id="username"
          className="fadeIn second"
          name="username"
          placeholder="username"
          required
        />
        <input
        required
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
        />
        <a  style={{marginLeft: "16rem"}}
         href='/forgot'>Forgot Passowrd</a>
        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        
      </div>
    </div>
  </div>
</>


    </div>
  )
}




export default Login
 