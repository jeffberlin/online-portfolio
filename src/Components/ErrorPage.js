import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="project-img-page error">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p>The page you are looking for does not exist here. Please go back to <Link to="/">jeffberlindev.com</Link>.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ErrorPage;
