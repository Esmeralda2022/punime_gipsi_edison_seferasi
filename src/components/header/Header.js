import React from 'react';

import Social from '../social/Social';
import {RiWhatsappLine} from 'react-icons/ri';
import { Container, Row, Col } from 'react-bootstrap';
import ReactWhatsapp from 'react-whatsapp';

function Header() {
  return (
    <Container fluid className='container_header' id='#home'>
      <Row>
        <Col lg={3} md={4} ></Col>
         <Col ><h3 className='header3'>Punime te ndryshme me gips, lyerje, patinim. </h3></Col>
         <Col lg={3} md={4}></Col>
      </Row>
      <Row>
        <Col lg={2}></Col>
        <Col><h1 className='header1'>EdisonConstruction Punime Bashkohore Gipsi. </h1></Col>
        <Col lg={2}></Col>
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col><h3 className='header31'>Ofrojme cilesi dhe korrektesi.</h3></Col>
        <Col lg={4}></Col>
      </Row>
      <Row>
        <Col ></Col>
        <Col></Col>
        <Col> <ReactWhatsapp  number="+355-695263997" message="Pershendetje, jam i interesuar per punimet tuaja." className ='btn btn-outline-success'><RiWhatsappLine/> 0695263997</ReactWhatsapp></Col>
        <Col ></Col>
        <Col></Col>
      </Row>
      <Row className="justify-content-md-center">
          <Col><Social/></Col>
         
        </Row>

    </Container>
    )
}

export default Header
