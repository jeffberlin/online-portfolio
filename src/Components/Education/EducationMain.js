import education from './EducationArray';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education() {
  return (
    <section className="education" id="education" style={{ paddingTop: '3rem' }}>
      <Container className="section-container">
        <Row>
          <Col lg={10} md={12}>
            <h2 className="section-title">Education</h2>
          </Col>
        </Row>
        {education.map((edu, index) => (
          <Row className="justify-content-center" key={index}>
            <Col lg={10} md={12} className="edu-info">
              <div>
                <p className="section-place"><a href={edu.url} target="_blank">{edu.name}</a></p>
                <p className="edu-course">{edu.course}</p>
                <p className="text-thin">{edu.start}&nbsp;-&nbsp;{edu.end}</p>
                <p className="section-description">{edu.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Education;
