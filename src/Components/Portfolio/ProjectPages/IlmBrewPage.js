import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ilmBrewLogo from '../images/ilm-brew-logo-full.jpg';

function IlmBrewPage() {
  useEffect(() => {
    document.title = "Jeff Berlin - Wilmington Brew Logo"
  })

  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Image
              src={ilmBrewLogo}
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IlmBrewPage;
