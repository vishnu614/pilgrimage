import React from "react";
import shir from '../video/shirdi.mp4'




function Shirdi()
{
    return(
       <div className="badrinath">
        <div>
        <center>
            <video width="720" height='450' controls>
                <source src={shir} type='video/mp4'/>
            </video>
        </center>
        </div>
        <div className="descrip">
            <center>
                <h1 style={{color:"red"}}>SHIRDI TEMPLE</h1>
                <p>
                Sai Baba of Shirdi (c. 1838? - died 15 October 1918), also known as Shirdi Sai Baba, 
                was an Indian spiritual master and fakir, considered to be a saint,
                revered by both Hindu and Muslim devotees during and after his lifetime.A
                ccording to accounts from his life, Sai Baba preached the importance of "realization 
                of the self" and criticized "love towards perishable things". His teachings concentrat
                e on a moral code of love, forgiveness, helping others, charity, contentment, inner peace
                , and devotion to God and Guru. 
                </p>
            </center>

        </div>

        </div>
        
    )
}
export default Shirdi ;