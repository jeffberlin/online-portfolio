import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import development from './DevelopmentSkillsArray';
import design from './DesignSkillsArray';
import other from './OtherSkillsArray';

function SkillsMain() {
  return (
    <section className="skills" id="skills" style={{ paddingTop: '3rem' }}>
      <Container className="section-container">
        <Row>
          <Col lg={10}>
            <h2 className="section-title">Skills</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h4 className="text-center"><em>Development</em></h4>
            <ul className="text-center" style={{ marginBottom: '1.8rem' }}>
              {development.map((dev, index) => (
                <li key={index}>{dev}</li>
              ))}
            </ul>
            <h4 className="text-center"><em>Design</em></h4>
            <ul className="text-center" style={{ marginBottom: '1.8rem' }}>
              {design.map((des, index) => (
                <li key={index}>{des}</li>
              ))}
            </ul>
            <h4 className="text-center"><em>Other</em></h4>
            <ul className="text-center">
              {other.map((o, index) => (
                <li key={index}>{o}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SkillsMain;
