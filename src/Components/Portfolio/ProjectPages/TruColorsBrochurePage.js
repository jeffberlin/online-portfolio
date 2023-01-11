import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import truColorsBrochure from '../images/tru-colors-brochure.pdf';

function TruColorsBrochurePage() {
  useEffect(() => {
    document.title = "Jeff Berlin - TRU Colors Brewery Brochure"
  })

  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Ratio>
              <iframe type="image/pdf" title='TRU Colors Brochure' src={truColorsBrochure} />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TruColorsBrochurePage;
