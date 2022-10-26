import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import backTo80 from '../images/back-to-80s-flyer-full.jpg';

function BackTo80Page() {
  useEffect(() => {
    document.title = "Jeff Berlin - Back to the 80's Flyer"
  })

  return (
    <div className="project-img-page">
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
