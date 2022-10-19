import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import headshot from '../../images/headshot-min.jpg';

function ContactNav() {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: '#007b70',
        paddingBottom: '1.5rem'
      }}
    >
      <Container>
        <Image
          roundedCircle
          thumbnail
          className="headshot"
          src={headshot}
          alt="Jeff Berlin headshot"
          title="Jeff Berlin headshot"
        />
        <h1 className="name">Jeff Berlin</h1>
        <h3 className="tag">Web Developer</h3>
        <Row className="justify-content-center contact-info">
          <Col lg={3}>
            <a href="mailto:jeff@jbrally.com" alt="email" title="E-mail me">
              <span className="fa fa-envelope"></span>
              jeff@jbrally.com
            </a>
          </Col>
          <Col lg={3}>
            <a href="tel:1-302-463-5129" alt="Phone number" title="Call me">
              <span className="fa fa-phone"></span>
              (302)-463-5129
            </a>
          </Col>
          <Col lg={3}>
            <a href="https://www.google.com/maps/place/Wilmington,+NC/@34.2068977,-78.1523955,119498m/data=!3m1!1e3!4m5!3m4!1s0x89a9f5a20debaed5:0x5e66493884093032!8m2!3d34.2103894!4d-77.8868117?hl=en" target="_blank" title="View on a map">
              <span className="fa fa-map-marker"></span>
              Wilmington, NC
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactNav;
