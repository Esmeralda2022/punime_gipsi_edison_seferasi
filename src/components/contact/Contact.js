import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BsInstagram} from 'react-icons/bs';
import {RiWhatsappLine} from 'react-icons/ri';
import ReactWhatsapp from 'react-whatsapp';



function Contact() {
  
  return (
     <Container fluid className='container_contact' id='contact'>
       <Row >
          <Col lg= {2}></Col>
          <Col lg ={4} md ={4}> Follow Me
              <Row>
                 <Col></Col>
                 <Col lg ={6} md={6} ><a href='https://www.instagram.com/?hl=en'  className='btn btn-outline-light'> <BsInstagram/> </a></Col>
                 <Col></Col>
                 <Col lg= {4} md={6}></Col>
              </Row>
          </Col>
         <Col lg={2}></Col>
         <Col lg= {4} md ={4}>Me kontakto
             <Row>
                 <Col></Col>
                 <Col lg ={6} md={6}><ReactWhatsapp  number="+355-695263997" message="Pershendetje, jam i interesuar per punimet tuaja." className ='btn btn-outline-light'><RiWhatsappLine /> </ReactWhatsapp></Col>
                 <Col ></Col>
                 <Col lg= {4} md={6}></Col>
             </Row>
         </Col>
        </Row>
       <br/>
       <br/>
       <br/>
       <Row>
         <Col lg={5} md={5}></Col>
         <Col lg={2} md={2}><p>&copy; eF All Rights Reserved</p></Col>
         <Col lg={5} md={5}></Col>
       </Row>
       
     </Container>
  )
}

export default Contact
