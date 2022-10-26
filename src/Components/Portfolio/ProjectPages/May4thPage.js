import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import may4thFlyer from '../images/may-4th-flyer-full.jpg';

function May4thPage() {
  useEffect(() => {
    document.title = "Jeff Berlin - May the Fourth Flyer"
  })

  return (
    <div className="project-img-page">
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
