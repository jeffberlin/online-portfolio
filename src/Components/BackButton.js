import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BackButton() {
  const buttonStyle = {
    fontSize: '1rem',
    color: '#006159'
  }

  return (
    <div className="back-btn roboto" style={{ paddingTop: '2rem'}}>
      <Container>
        <Row>
          <Col xl={8} lg={8}>
            <Link to="/">
              <i className="fa fa-arrow-left" style={ buttonStyle }></i>&nbsp;Back
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BackButton;
