import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import spFlyer from '../images/sp-30th-full.jpg';

function SpFlyerPage() {
  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={spFlyer}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpFlyerPage;
