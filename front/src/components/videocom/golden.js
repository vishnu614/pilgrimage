import React from "react";
import gol from '../video/golden.mp4'




function Golden()
{
    return(
       <div className="badrinath">
        <div>
        <center>
            <video width="720" height='450' controls>
                <source src={gol} type='video/mp4'/>
            </video>
        </center>
        </div>
        <div className="descrip">
            <center>
                <h1 style={{color:"red"}}>GOLDEN TEMPLE</h1>
                <p1>
                The Golden Temple (also known as the Harmandir Sahib, lit. 'abode of God', Punjabi pronunciation:
                 [ɦəɾᵊmən̪d̪əɾᵊ saːɦ(ɪ)bᵊ], or the Darbār Sahib, 'exalted court', [d̪əɾᵊbaːɾᵊ saːɦ(ɪ)bᵊ][2]) is a gurdwara 
                 located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It i
                 s one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gur
                 dwara Janam Asthan in Nankana Sahib.
                
                </p1>
            </center>

        </div>

        </div>
        
    )
}
export default Golden ;