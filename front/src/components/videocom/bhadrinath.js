import React from "react";
import badri from '../video/badrinath.mp4';




function Badrinath()
{
    return(
       <div className="badrinath" >
        <div>
        <center>
            <video width="720" height='450' controls>
                <source src={badri} type='video/mp4'/>
            </video>
        </center>
        </div>
        <div className="descrip">
            <center>
                <h1 style={{color:"red"}}>BADRINATH TEMPLE</h1>
              <p>
                Badrinath or Badrinarayana Temple is a Hindu temple dedicated to Vishnu. 
                It is situated in the town of Badrinath in Uttarakhand, India. The temple 
                is also one of the 108 Divya Desams dedicated to Vishnu - holy shrines for 
                Vaishnavas - who is worshipped as Badrinath. It is open for six months every year 
                (between the end of April and the beginning of November), because of extreme weather 
                conditions in the Himalayan region.
                </p>
            </center>

        </div>

        </div>
        
    )
}
export default Badrinath;