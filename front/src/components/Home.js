import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import temp1 from '../images/temp1.jpg'
import temp3 from '../images/temp3.jpg'
import temp8 from '../images/temp8.jpg'
import temp4 from '../images/temp4.jpg'
import '../App.css'

function Home()
{
    return(
        <div className="Home">
         <marquee style={{color:"red",fontSize:'3em'}} >
          Welcome to Virtual Darshan
         </marquee>
           <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={temp1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Badrinath Temple</h3>
          <p>signup to visit Badrinath temple </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src={temp3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Kedarnath Temple
          </h3>
          <p>signup to visit Kedarnath temple .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={temp8}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Brihadeeswara Temple</h3>
          <p>
          signup to visit Brihadeeswara Temple
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={temp4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ramanathaswamy Temple</h3>
          <p>
          signup to visit Ramanathaswamy Temple
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    <div className="area">
        <h5 className="descrip">
        Pilgrimage in Hinduism, as in other religions, is the practice of journeying to sites where religious powers,
         knowledge, or experience are deemed especially accessible. Hindu pilgrimage is rooted in ancient scriptures.
          According to textual scholars, the earliest reference to Hindu pilgrimage is in the Rigveda.Pilgrimage has been 
          increasingly popular since the 20th century,facilitated by ever-improving transportation.But due to any
           inconvenience visit is not possible this application tries to give a virtual visit to various Indian temples.
        </h5>

    </div>
    <h1>
      ABOUT US
    </h1>
    <p className="descrip">
    Welcome to Virtual Darshan, the premier virtual pilgrimage platform. Our goal is to make it easier for people all over the world to experience the spiritual, cultural, and historical richness of pilgrimage destinations, without the limitations of time or physical mobility.

We believe that pilgrimage is a transformative journey that has the power to bring people together and deepen our connection to our spirituality, culture, and history. That's why we've created Virtual Darshan – to make pilgrimage accessible to everyone, regardless of their location or circumstances.

Our team is made up of a diverse group of experts in the fields of virtual reality, tourism, and cultural heritage. We're passionate about creating immersive, interactive experiences that allow you to explore pilgrimage destinations from the comfort of your own home.

Whether you're a seasoned traveler, a curious explorer, or simply looking for a spiritual experience,Virtual Darshan is the perfect way to embark on a virtual pilgrimage. So join us on this journey, and experience the power of pilgrimage for yourself."
    </p>
    

        </div>
    )
}
export default Home;