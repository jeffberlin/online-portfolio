import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import jomoFadeout from '../images/jomo-video-fadeout.jpg';

function JomoFadeoutPage() {
  useEffect(() => {
    document.title = "Jeff Berlin - JOMO Video Fade-out"
  })

  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={jomoFadeout}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JomoFadeoutPage;
