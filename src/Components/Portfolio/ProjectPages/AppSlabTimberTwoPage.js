import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import appSlabTimberTwo from '../images/app-logo-2-full.jpg';

function AppSlabTimberTwoPage() {
  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={appSlabTimberTwo}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppSlabTimberTwoPage;
