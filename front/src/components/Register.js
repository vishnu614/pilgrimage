import React ,{useState} from "react";
import axios from 'axios';
import backim from '../images/backim.jpg'

import '../App.css'
function Register()
{
    
    const[user,setUser]=useState({   
        name:"",
        username:"",
        mobile:"",
        email:"",
        password:""
    })

    const hachange = e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

   
    const register=(e)=>{
      e.preventDefault();
        const{name,username,mobile,email,password}=user
        

        if(name && username && password && mobile&& email){
            
            axios.post("http://localhost:4000/register",user)
            .then(res=>alert(res.data))
        }
        else{
            alert("please enter valid input")
        }
       

       
      }
      

      

    return(
        <div className="backimage" style={{ backgroundImage: `url(${backim})` }}>
            
            <form  class="login-form">
  <h2>Register</h2>
  <div class="form-group" >
    <label for="name">Name:</label>
    <input type="text" name="name" placeholder="Enter your Name"  value={user.name} onChange={hachange}/>
  </div>
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" name="username" placeholder="Enter your username"  value={user.username} onChange={hachange}/>
  </div>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" name="mobile" placeholder="Enter your mobile"  value={user.mobile}   onChange={hachange}/>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="Enter your Email"  value={user.email}   onChange={hachange}/>
  </div>

  
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password"  name="password" placeholder="Enter your password" value={user.password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={hachange}/>
  </div>
  <button type="submit" onClick={register}>Register</button>
</form>
        

         </div>
         
      
    )
}

export default Register;