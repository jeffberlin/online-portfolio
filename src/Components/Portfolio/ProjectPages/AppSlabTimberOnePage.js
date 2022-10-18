import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import appSlabTimberOne from '../images/app-logo-1-full.jpg';

function AppSlabTimberOnePage() {
  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={appSlabTimberOne}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppSlabTimberOnePage;
