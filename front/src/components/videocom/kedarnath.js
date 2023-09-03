import React from "react";
import keda from '../video/kedarnath.mp4'




function Kedarnath()
{
    return(
       <div className="badrinath">
        <div>
        <center>
            <video width="720" height='450' controls>
                <source src={keda} type='video/mp4'/>
            </video>
        </center>
        </div>
        <div className="descrip">
            <center>
                <h1 style={{color:"red"}}>KEDARNATH TEMPLE</h1>
                <p1>
                Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, 
                India, known primarily for the Kedarnath Temple. It is approximately 86 kilometr
                es from Rudraprayag, the district headquarter. Kedarnath is the most remote of the
                 four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m
                  (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the
                   Mandakini river.
                </p1>
            </center>

        </div>

        </div>
        
    )
}
export default Kedarnath;