import React from "react";
import som from '../video/somnath.mp4'




function Somnath()
{
    return(
       <div className="badrinath">
        <div>
        <center>
            <video width="720" height='450' controls>
                <source src={som} type='video/mp4'/>
            </video>
        </center>
        </div>
        <div className="descrip">
            <center>
                <h1 style={{color:"red"}}>SOMNATH TEMPLE</h1>
                <p1>
                The Somnath temple, also called Somanātha temple or Deo Patan, 
                is a Hindu temple located in Prabhas Patan, Veraval in Gujarat,
                 India. It is one of the most sacred pilgrimage sites for Hindus and 
                 is believed to be first among the twelve jyotirlinga shrines of Shiva
                </p1>
            </center>

        </div>

        </div>
        
    )
}
export default Somnath ;