import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <section className="about" style={{ paddingTop: '3rem' }}>
      <Container className="section-container">
        <Row>
          <Col lg={10} sm={12}>
            <h2 className="section-title">About Me</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p>What started out as a desire to learn graphic design, turned into a passion for bringing the designs and ideas to life by way of code. Some of the things that I love most about web developement is the constant problem solving and always learning having to learn new things. Outside of programming, I enjoy playing ice hockey, racing cars, snowboarding, hiking, and exploring new breweries.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
