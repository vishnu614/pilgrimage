import React ,{useState}from "react";
import axios from "axios";
import backiml from '../images/backiml.jpg'
import { useNavigate} from "react-router-dom";


function Login()
{
  const navigate =useNavigate();

    
    const[user,setUser]=useState({
        username:"",
        password:""
    })
  

    const hachange =(e)=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
   
    const login=()=>{
      
        axios.post("http://localhost:4000/login",user)
        .then((res)=> {
          var ss= res.data;
          if(ss==="login"){
          // setTimeout(()=>{
           // navigate("/cards");
          // })
            window.location="/cards";
          }
          else
          {
            alert(ss)
          }
         }  )  
    }

    
   
    return(
        <div className="backimage" style={{ backgroundImage: `url(${backiml})` }}>
            
            <form class="login-form">
  <h2>Login</h2>
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" name="username" placeholder="Enter your username"  value={user.username} onChange={hachange}/>
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password"  name="password" placeholder="Enter your password" value={user.password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={hachange}/>
  </div>
  <button type="submit" onClick={login}>Login</button>
</form>
        

         </div>
         
       
    )
     
}
export default Login;
