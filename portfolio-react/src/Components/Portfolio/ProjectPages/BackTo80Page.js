import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import backTo80 from '../images/back-to-80s-flyer-full.jpg';

function BackTo80Page() {
  return (
    <div className="project-img-page" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={backTo80}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BackTo80Page;
