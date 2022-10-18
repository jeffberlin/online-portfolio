import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Image from 'react-bootstrap/Image';
import truColorsBrochure from '../images/tru-colors-brochure.pdf';

function TruColorsBrochurePage() {
  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <Ratio>
              <iframe type="image/pdf" src={truColorsBrochure} />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TruColorsBrochurePage;
