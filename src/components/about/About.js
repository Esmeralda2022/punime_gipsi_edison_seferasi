import React from 'react';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import gips from '../../foto/gips.jpg';
import wall1 from '../../foto/wall1.jpg';
import edi1 from '../../foto/edi1.jpeg';
import edi2 from '../../foto/edi2.jpeg';
import edi3 from '../../foto/edi3.jpeg';
import edi4 from '../../foto/edi4.jpeg';
import edi5 from '../../foto/edi5.jpeg';
import edi6 from '../../foto/edi6.jpeg';
import edi7 from '../../foto/edi7.jpeg';
function About() {
  return (
    <Container fluid>
      <Row>
         <Col>
         <h2 id='about'>Rreth meje</h2>
        </Col>
      </Row>
           <Row>
               <Col sm ={12} md = {12} lg = {4}>
                   <Carousel >
                       <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi1}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                         <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi2}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                         <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi3}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                         <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi4}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                         <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi5}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                         <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi6}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                         <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src= {edi7}
                              alt="First slide"
                            />
                                 
                         </Carousel.Item>
                     </Carousel>
                 </Col> 
                    <Col lg = {3} ></Col>
                      <Col lg = {5} style={{ marginTop: `22px` }}>
                         <Card  style={{ width: '18rem' }} >
                             <Card.Body>
                                 <Card.Title> <FaAward/>Eksperienca</Card.Title>
                                 <Card.Subtitle className="mb-2 text-muted">10+ Vite Pune</Card.Subtitle>
                                 <Card.Text>Me shume se 10 vite duke bere punime te ndryshme gipsi.
                                 </Card.Text>
                             </Card.Body>
                          </Card>
                          <br/>
                              <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                   <Card.Title><FaUsers/>Klientet</Card.Title>
                                   <Card.Subtitle className="mb-2 text-muted">+1000 kliente</Card.Subtitle>
                                   <Card.Text> Me shume se 1000 kliente te kenaqur me punen.
                                   </Card.Text>
                                </Card.Body>
                              </Card>
                              
                      </Col>
                      
            </Row>
    </Container>

  )
}

export default About