import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import MyHashLink from './MyHashLink';
import headshot from '../../images/jeff-berlin-landing-background-min3.jpg';
import { Nav } from 'react-bootstrap';
import MyContactModal from './ContactModal';

function Landing() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container fluid className='landing' style={{ backgroundImage: `url(${headshot})` }}>
        <Row>
          <Col xl={6} lg={6} md={8} style={{ paddingLeft: '0'}}>
            <div className='name-box'>
              <h1 className='lato'>Jeff Berlin</h1>
              <h2 className='roboto' style={{ letterSpacing: '.7px' }}>UI/UX Designer & Developer</h2>
              <p className='roboto' style={{ color: '#fff', letterSpacing: '.5px' }}>I am a highly motivated UI/UX designer and developer with over five years of experience working in different industries. I also love learning and problem solving.</p>
              <div className='text-center'>
                <button
                  className='contact-btn roboto'
                  style={{ letterSpacing: '.7px' }}
                  onClick={() => setModalShow(true)}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xl={1} lg={1} md={1} sm={1} className='text-center' style={{ bottom: '0', position: 'absolute'}}>
            <Nav.Link
              to="/#portfolio"
              as={MyHashLink}
            >
              <i className='fa fa-chevron-down'></i>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      <MyContactModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Landing;