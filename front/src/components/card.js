import React from 'react'
import '../App.css'
import {Container ,Row,Card, Col, Button} from 'react-bootstrap';  
import temp1 from '../images/temp1.jpg'
import temp2 from '../images/temp2.jpg'
import temp3 from '../images/temp3.jpg'
import temp5 from '../images/temp5.jpg'
import temp6 from '../images/temp6.jpg'
import temp9 from '../images/temp9.jpg'
import { Link } from 'react-router-dom';
import backim11 from '../images/back11.jpg'



function Cards()
{
    
    return(
        <div className="backimage2" style={{ backgroundImage: `url(${backim11})` }} >
            
            <Row>
                <Col>
           <Container className='p-4'>  
            <Col md="10">  
            <Card>  
            <Card.Img variant="top" src={temp1} />  
            <Card.Body>  
                <Card.Title>Badrinath Temple</Card.Title>  
                <Card.Text>  
                Situated close to the Alaknanda River, the abode of Lord Badrinath is located in the Chamoli district of Uttarakhand. This holy shrine of Lord Vishnu is one of the Char Dhams of Hindu religion.
                </Card.Text>  
                <Link to='/badri'>
                <Button variant="primary">Visit</Button> </Link>
            </Card.Body>  
            </Card>  
            </Col>  
        </Container>  
        </Col>
    <Col>
            <Container className='p-4 '>  
            <Col md="10">  
            <Card>  
            <Card.Img variant="top" src={temp2} />  
            <Card.Body>  
                <Card.Title>Somnath Temple </Card.Title>  
                <Card.Text>  
                Somnath Temple is one of the oldest pilgrimage centres in India and finds mention in the ancient books of Shiv Puran,Skanda Purana and Shreemad Bhagvat Gita. Soma refers to Moon God, thus Somnath means Protector of the Moon God.
                </Card.Text>  
                <Link to='/somn'>
                <Button variant="primary">Visit</Button> </Link>
            </Card.Body>  
            </Card>  
                </Col>  
            </Container>  
        </Col>
        <Col>
            <Container className='p-4 '>  
            <Col md="10">  
            <Card>  
            <Card.Img variant="top" src={temp3} />  
            <Card.Body>  
                <Card.Title>Kedarnath Temple</Card.Title>  
                <Card.Text>  
                Situated in the Himalayan range of Garhwal (Uttarakhand), Kedarnath temple is one of the most sacred shrines in the world. The holy abode of Shiva is believed to have been built by the Pandavas to atone for their sins during Mahabharata.
                </Card.Text>  
                <Link to='/keder'>
                <Button variant="primary">Visit</Button> </Link> 
            </Card.Body>  
            </Card>  
                </Col>  
            </Container>  
        </Col>
    </Row>
    <Row>
        <Col>
            <Container className='p-4 '>  
            <Col md="10">  
            <Card>  
            <Card.Img variant="top" src={temp9} />  
            <Card.Body>  
                <Card.Title>Golden Temple</Card.Title>  
                <Card.Text>  
                Golden temple's original name is Sri Harmandir Sahib temple. It is located in Amritsar and is one of the most famous temples all around the world. Not only is the majority of the temple built of gold, but the Langar Khana of the temple feeds more than thousands of people
                </Card.Text>  
                <Link to='/gold'>
                <Button variant="primary">Visit</Button> </Link>
            </Card.Body>  
            </Card>  
                </Col>  
            </Container>  
        </Col>
                
    <Col>
            <Container className='p-4 '>  
            <Col md="10">  
            <Card>  
            <Card.Img variant="top" src={temp5} />  
            <Card.Body>  
                <Card.Title>Tirupati Balaji Temple</Card.Title>  
                <Card.Text>  
                Located in the hilly town of Tirumala in Andhra Pradesh, the temple is also known as Tirumala Venkateswara temple. The temple is devoted to Lord Venkateshwara, who is popularly called Balaji and is the incarnation of Lord Vishnu.
               
                </Card.Text>  
                <Link to='/tiru'>
                <Button variant="primary">Visit</Button> </Link>
            </Card.Body>  
            </Card>  
                </Col>  
            </Container>  
        </Col>
        <Col>
            <Container className='p-4 '>  
            <Col md="10">  
            <Card>  
            <Card.Img variant="top" src={temp6} />  
            <Card.Body>  
                <Card.Title>Shirdi Sai Baba Temple</Card.Title>  
                <Card.Text>  
                The holy temple of Sai baba was built in 1922 in Shirdi, Maharashtra. Located about 296 kms from Mumbai, the small town of Shirdi has attained fame due to its association with Shri Sai Baba.
                </Card.Text>  
                <Link to='/shirdi'>
                <Button variant="primary">Visit</Button> </Link>
            </Card.Body>  
            </Card>  
                </Col>  
            </Container>  
        </Col>
    </Row>
        </div>
    )
}
export default Cards;