import React from "react";
import tir from '../video/tirupathi.mp4'




function Tirupathi()
{
    return(
       <div className="badrinath">
        <div>
        <center>
            <video width="720" height='450' controls>
                <source src={tir} type='video/mp4'/>
            </video>
        </center>
        </div>
        <div className="descrip">
            <center>
                <h1 style={{color:"red"}}>TIRUPATHI BALAJI TEMPLE</h1>
                <p>
                Sri Venkateswara Swami Vaari Temple is a Hindu temple situate
                d in the hill town of Tirumala at Tirupati in Tirupati district
                 of Andhra Pradesh, India. The Temple is dedicated to Venkateswa
                 ra, a form of Vishnu, who is believed to have appeared on the ear
                 th to save mankind from trials and troubles of Kali Yuga. 
                 </p>
            </center>

        </div>

        </div>
        
    )
}
export default Tirupathi ;