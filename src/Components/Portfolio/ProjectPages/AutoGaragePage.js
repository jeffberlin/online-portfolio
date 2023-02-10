import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import autoGarageWireframe from '../images/auto-garage-landing-wireframe-min.png';

function AutoGarageWireframe() {
  useEffect(() => {
    document.title = "Jeff Berlin - Appalachian Slab & Timber Logo"
  })
  
  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={autoGarageWireframe}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AutoGarageWireframe;
