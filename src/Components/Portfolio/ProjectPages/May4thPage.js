import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import may4thFlyer from '../images/may-4th-flyer-full.jpg';

function May4thPage() {
  return (
    <div className="project-img-page" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={may4thFlyer}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default May4thPage;