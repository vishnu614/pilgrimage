import React ,{useState}from "react";
import firebase from "./Firebase";
import backim from '../images/backim.jpg'
import { useNavigate} from "react-router-dom";


function Loginotp()
{
  const navigate =useNavigate();

    
    const[user,setUser]=useState({
        mobile:"",
        otp:""
    })
  

    const hachange =(e)=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
   const configurecaptcha=()=>{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptcha varified")
        },
        defaultCountry:'In'
      });
    }

  const   onSignInSubmit=(e)=>{
      e.preventDefault();
      configurecaptcha();
      const phoneNumber = "+91"+user.mobile;
     
      console.log(phoneNumber);
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("otp has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("sms not sent");
    });
    }

   const onSubmitotp=(e)=>{
    e.preventDefault();
    const code=user.otp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("user is verified");
      navigate('/cards')
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
    


   }
    
    
   
    return(
        <div className="backimage" style={{ backgroundImage: `url(${backim})` }}>
            
   <form class="login-form" onSubmit={onSignInSubmit}>
  <h2>Login</h2>
  <div id='sign-in-button'></div>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="number" name="mobile" placeholder="Enter your Mobile"  value={user.username} onChange={hachange}/>
  </div>
  <button type="submit" >Submit</button>
</form>
<form class="login-form" id='1115' onSubmit={onSubmitotp}>
  <h2>OTP</h2>
  <div class="form-group">
    <label for="username">OTP:</label>
    <input type="number" name="otp" placeholder="Enter OTP"  value={user.username} onChange={hachange}/>
  </div>
  <button type="submit" >Submit</button>
</form>
        

         </div>
         
       
    )
     
}
export default Loginotp;
