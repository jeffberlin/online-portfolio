import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="text-center">
      <Container>
        <Row>
          <Col>
            <p>Email <a href="mailto:jeff@jbrally.com" style={{ textDecorationType: 'underline' }}>jeff@jbrally.com</a> for all inquiries.</p>
            <p>&copy;&nbsp;Jeff Berlin {getYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
